/*! For license information please see c64024bf.45d89066.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54586],{73135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(24246),a=t(71670);const r={id:"animatedvaluexy",title:"Animated.ValueXY"},i=void 0,l={unversionedId:"animatedvaluexy",id:"version-0.71/animatedvaluexy",title:"Animated.ValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/versioned_docs/version-0.71/animatedvaluexy.md",sourceDirName:".",slug:"/animatedvaluexy",permalink:"/docs/0.71/animatedvaluexy",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/animatedvaluexy.md",tags:[],version:"0.71",frontMatter:{id:"animatedvaluexy",title:"Animated.ValueXY"},sidebar:"api",previous:{title:"Animated.Value",permalink:"/docs/0.71/animatedvalue"},next:{title:"Appearance",permalink:"/docs/0.71/appearance"}},d={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>setValue()</code>",id:"setvalue",level:3},{value:"<code>setOffset()</code>",id:"setoffset",level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",level:3},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",level:3},{value:"<code>getLayout()</code>",id:"getlayout",level:3},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",level:3}];function o(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",(0,s.jsx)(n.a,{href:"/docs/0.71/animatedvalue",children:(0,s.jsx)(n.code,{children:"Animated.Value"})}),", but multiplexed. Contains two regular ",(0,s.jsx)(n.code,{children:"Animated.Value"}),"s under the hood."]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Animated.ValueXY","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20PanResponder%2C%20StyleSheet%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20DraggableView%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%5Cn%5Cn%20%20const%20panResponder%20%3D%20PanResponder.create(%7B%5Cn%20%20%20%20onStartShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%5Cn%20%20%20%20%20%20null%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20dx%3A%20pan.x%2C%20%2F%2F%20x%2Cy%20are%20Animated.Value%5Cn%20%20%20%20%20%20%20%20dy%3A%20pan.y%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D)%2C%5Cn%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Animated.spring(%5Cn%20%20%20%20%20%20%20%20pan%2C%20%2F%2F%20Auto-multiplexed%5Cn%20%20%20%20%20%20%20%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D%20%2F%2F%20Back%20to%20zero%5Cn%20%20%20%20%20%20).start()%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bpan.getLayout()%2C%20styles.box%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20width%3A%2080%2C%5Cn%20%20%20%20height%3A%2080%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DraggableView%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"setvalue",children:(0,s.jsx)(n.code,{children:"setValue()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"setValue(value);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Directly set the value. This will stop any animations running on the value and update all the bound properties."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"setoffset",children:(0,s.jsx)(n.code,{children:"setOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"setOffset(offset);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets an offset that is applied on top of whatever value is set, whether via ",(0,s.jsx)(n.code,{children:"setValue"}),", an animation, or ",(0,s.jsx)(n.code,{children:"Animated.event"}),". Useful for compensating things like the start of a pan gesture."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"flattenoffset",children:(0,s.jsx)(n.code,{children:"flattenOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"flattenOffset();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"extractoffset",children:(0,s.jsx)(n.code,{children:"extractOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"extractOffset();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"addlistener",children:(0,s.jsx)(n.code,{children:"addListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"addListener(callback);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."}),"\n",(0,s.jsx)(n.p,{children:"Returns a string that serves as an identifier for the listener."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["The callback function which will receive an object with a ",(0,s.jsx)(n.code,{children:"value"})," key set to the new value."]})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"removelistener",children:(0,s.jsx)(n.code,{children:"removeListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"removeListener(id);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Unregister a listener. The ",(0,s.jsx)(n.code,{children:"id"})," param shall match the identifier previously returned by ",(0,s.jsx)(n.code,{children:"addListener()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"Id for the listener being removed."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"removealllisteners",children:(0,s.jsx)(n.code,{children:"removeAllListeners()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"removeAllListeners();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove all registered listeners."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"stopanimation",children:(0,s.jsx)(n.code,{children:"stopAnimation()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"stopAnimation([callback]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Stops any running animation or tracking. ",(0,s.jsx)(n.code,{children:"callback"})," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"A function that will receive the final value."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"resetanimation",children:(0,s.jsx)(n.code,{children:"resetAnimation()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"resetAnimation([callback]);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Stops any animation and resets the value to its original."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"A function that will receive the original value."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getlayout",children:(0,s.jsx)(n.code,{children:"getLayout()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"getLayout();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Converts ",(0,s.jsx)(n.code,{children:"{x, y}"})," into ",(0,s.jsx)(n.code,{children:"{left, top}"})," for use in style, e.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"style={this.state.anim.getLayout()}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"gettranslatetransform",children:(0,s.jsx)(n.code,{children:"getTranslateTransform()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"getTranslateTransform();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Converts ",(0,s.jsx)(n.code,{children:"{x, y}"})," into a useable translation transform, e.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},71426:(e,n,t)=>{var s=t(27378),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,o=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:o,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(27378);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},n)}}}]);