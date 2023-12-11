/*! For license information please see 813ca450.e854595b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96702],{27669:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>t,toc:()=>h});var d=i(24246),r=i(71670);const s={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"},l=void 0,t={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/viewpager instead.",source:"@site/versioned_docs/version-0.71/viewpagerandroid.md",sourceDirName:".",slug:"/viewpagerandroid",permalink:"/docs/0.71/viewpagerandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/viewpagerandroid.md",tags:[],version:"0.71",frontMatter:{id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"}},c={},h=[{value:"Props",id:"props",level:2},{value:"<code>initialPage</code>",id:"initialpage",level:3},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:3},{value:"<code>onPageScroll</code>",id:"onpagescroll",level:3},{value:"<code>onPageScrollStateChanged</code>",id:"onpagescrollstatechanged",level:3},{value:"<code>onPageSelected</code>",id:"onpageselected",level:3},{value:"<code>pageMargin</code>",id:"pagemargin",level:3},{value:"<code>peekEnabled</code>",id:"peekenabled",level:3},{value:"<code>scrollEnabled</code>",id:"scrollenabled",level:3},{value:"<code>setPage</code>",id:"setpage",level:3},{value:"<code>setPageWithoutAnimation</code>",id:"setpagewithoutanimation",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"ViewPagerScrollState",id:"viewpagerscrollstate",level:3}];function a(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",hr:"hr",h1:"h1",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",em:"em"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5df2\u8fc7\u65f6\u3002"})," Use ",(0,d.jsx)(n.a,{href:"https://github.com/react-native-community/react-native-viewpager",children:"@react-native-community/viewpager"})," instead."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u4e2a\u5141\u8bb8\u5728\u5b50\u89c6\u56fe\u4e4b\u95f4\u5de6\u53f3\u7ffb\u9875\u7684\u5bb9\u5668\u3002\u6bcf\u4e00\u4e2a ViewPagerAndroid \u7684\u5b50\u5bb9\u5668\u4f1a\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5355\u72ec\u7684\u9875\uff0c\u5e76\u4e14\u4f1a\u88ab\u62c9\u4f38\u586b\u6ee1 ViewPagerAndroid\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6ce8\u610f\u6240\u6709\u7684\u5b50\u89c6\u56fe\u90fd\u5fc5\u987b\u662f\u7eaf View\uff0c\u800c\u4e0d\u80fd\u662f\u81ea\u5b9a\u4e49\u7684\u590d\u5408\u5bb9\u5668\u3002\u4f60\u53ef\u4ee5\u7ed9\u6bcf\u4e2a\u5b50\u89c6\u56fe\u8bbe\u7f6e\u6837\u5f0f\u5c5e\u6027\u8b6c\u5982 padding \u6216 backgroundColor\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'render() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nconst styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,d.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,d.jsx)(n.h3,{id:"initialpage",children:(0,d.jsx)(n.code,{children:"initialPage"})}),"\n",(0,d.jsx)(n.p,{children:"\u521d\u59cb\u9009\u4e2d\u7684\u9875\u7684\u4e0b\u6807\u3002\u4f60\u53ef\u4ee5\u7528 setPage \u51fd\u6570\u6765\u7ffb\u9875\uff0c\u5e76\u4e14\u7528 onPageSelected \u6765\u76d1\u542c\u9875\u7684\u53d8\u5316\u3002"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"keyboarddismissmode",children:(0,d.jsx)(n.code,{children:"keyboardDismissMode"})}),"\n",(0,d.jsx)(n.p,{children:"\u51b3\u5b9a\u5728\u6ed1\u52a8\u7684\u65f6\u5019\u662f\u5426\u8981\u8ba9\u8f6f\u952e\u76d8\u6d88\u5931\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"none \uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u62d6\u62fd\u4e0d\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002"}),"\n",(0,d.jsx)(n.li,{children:"on-drag\uff0c \u5f53\u62d6\u62fd\u5f00\u59cb\u7684\u65f6\u5019\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"enum('none', 'on-drag')"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"onpagescroll",children:(0,d.jsx)(n.code,{children:"onPageScroll"})}),"\n",(0,d.jsx)(n.p,{children:"\u5f53\u5728\u9875\u95f4\u5207\u6362\u65f6\uff08\u4e0d\u8bba\u662f\u7531\u4e8e\u52a8\u753b\u8fd8\u662f\u7531\u4e8e\u7528\u6237\u5728\u9875\u95f4\u6ed1\u52a8/\u62d6\u62fd\uff09\u6267\u884c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u6570\u636e\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"position \u4ece\u5de6\u6570\u8d77\u7b2c\u4e00\u4e2a\u5f53\u524d\u53ef\u89c1\u7684\u9875\u9762\u7684\u4e0b\u6807\u3002"}),"\n",(0,d.jsx)(n.li,{children:'offset \u4e00\u4e2a\u5728[0,1]\u4e4b\u5185\u7684\u8303\u56f4(\u53ef\u4ee5\u7b49\u4e8e 0 \u6216 1)\uff0c\u4ee3\u8868\u5f53\u524d\u9875\u9762\u5207\u6362\u7684\u72b6\u6001\u3002\u503c x \u8868\u793a\u73b0\u5728"position"\u6240\u8868\u793a\u7684\u9875\u6709(1 - x)\u7684\u90e8\u5206\u53ef\u89c1\uff0c\u800c\u4e0b\u4e00\u9875\u6709 x \u7684\u90e8\u5206\u53ef\u89c1\u3002'}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"function"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"onpagescrollstatechanged",children:(0,d.jsx)(n.code,{children:"onPageScrollStateChanged"})}),"\n",(0,d.jsx)(n.p,{children:"\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53d8\u5316\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53ef\u80fd\u4e3a\u4ee5\u4e0b\u4e09\u79cd\u4e4b\u4e00\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"idle \u7a7a\u95f2\uff0c\u610f\u5473\u7740\u5f53\u524d\u6ca1\u6709\u4ea4\u4e92\u3002"}),"\n",(0,d.jsx)(n.li,{children:"dragging \u62d6\u52a8\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u6b63\u5728\u88ab\u62d6\u52a8\u3002"}),"\n",(0,d.jsx)(n.li,{children:"settling \u5904\u7406\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u53d1\u751f\u8fc7\u4ea4\u4e92\uff0c\u4e14\u6b63\u5728\u7ed3\u675f\u5f00\u5934\u6216\u6536\u5c3e\u7684\u52a8\u753b\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"function"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"onpageselected",children:(0,d.jsx)(n.code,{children:"onPageSelected"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e2a\u56de\u8c03\u4f1a\u5728\u9875\u9762\u5207\u6362\u5b8c\u6210\u540e\uff08\u5f53\u7528\u6237\u5728\u9875\u9762\u95f4\u6ed1\u52a8\uff09\u8c03\u7528\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u7684\u5b57\u6bb5\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"position \u5f53\u524d\u88ab\u9009\u4e2d\u7684\u9875\u9762\u4e0b\u6807"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"function"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"pagemargin",children:(0,d.jsx)(n.code,{children:"pageMargin"})}),"\n",(0,d.jsx)(n.p,{children:"\u9875\u9762\u6ed1\u52a8\u65f6\u4e24\u4e2a\u9875\u9762\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u4ec5\u4ec5\u5728\u6ed1\u52a8\u65f6\u53ef\u89c1\uff0c\u9875\u9762\u4e4b\u95f4\u4ecd\u7136\u65f6\u8fb9\u5bf9\u8fb9\u7684\u3002"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"peekenabled",children:(0,d.jsx)(n.code,{children:"peekEnabled"})}),"\n",(0,d.jsx)(n.p,{children:"\u662f\u5426\u5728\u5f53\u524d\u9875\u6ed1\u52a8\u65f6\u5c55\u793a\u524d\u4e00\u9875\u6216\u8005\u540e\u4e00\u9875\uff0c\u9ed8\u8ba4\u4e3a false"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"scrollenabled",children:(0,d.jsx)(n.code,{children:"scrollEnabled"})}),"\n",(0,d.jsx)(n.p,{children:"\u8bbe\u4e3a false \u65f6\u53ef\u7981\u6b62\u6eda\u52a8\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(n.h3,{id:"setpage",children:(0,d.jsx)(n.code,{children:"setPage"})}),"\n",(0,d.jsx)(n.p,{children:"A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"position - index of page that will be selected"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"Required"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"setpagewithoutanimation",children:(0,d.jsx)(n.code,{children:"setPageWithoutAnimation"})}),"\n",(0,d.jsxs)(n.p,{children:["A helper function to scroll to a specific page in the ViewPager. The transition between pages will ",(0,d.jsx)(n.em,{children:"not"})," be animated."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"position - index of page that will be selected"}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"Required"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u7c7b\u578b\u5b9a\u4e49",children:"\u7c7b\u578b\u5b9a\u4e49"}),"\n",(0,d.jsx)(n.h3,{id:"viewpagerscrollstate",children:"ViewPagerScrollState"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"$Enum"})})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u5e38\u91cf:"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"idle"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dragging"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"settling"}),(0,d.jsx)(n.td,{})]})]})]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},71426:(e,n,i)=>{var d=i(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,i){var d,s={},h=null,a=null;for(d in void 0!==i&&(h=""+i),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,d)&&!c.hasOwnProperty(d)&&(s[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===s[d]&&(s[d]=n[d]);return{$$typeof:r,type:e,key:h,ref:a,props:s,_owner:t.current}}n.Fragment=s,n.jsx=h,n.jsxs=h},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>t,ah:()=>s});var d=i(27378);const r=d.createContext({});function s(e){const n=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function t({components:e,children:n,disableParentContext:i}){let t;return t=i?"function"==typeof e?e({}):e||l:s(e),d.createElement(r.Provider,{value:t},n)}}}]);