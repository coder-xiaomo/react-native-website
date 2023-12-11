/*! For license information please see 6f1bcaad.d9b4651f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3389],{21603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>C,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(24246),s=t(71670);const a={id:"transforms",title:"Transforms"},o=void 0,i={id:"transforms",title:"Transforms",description:"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.",source:"@site/versioned_docs/version-0.72/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/0.72/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/transforms.md",tags:[],version:"0.72",frontMatter:{id:"transforms",title:"Transforms"},sidebar:"api",previous:{title:"Systrace",permalink:"/docs/0.72/systrace"},next:{title:"Vibration",permalink:"/docs/0.72/vibration"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Transform",id:"transform",level:2},{value:"<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",level:3},{value:"Transform Origin",id:"transform-origin",level:2},{value:"Values",id:"values",level:3},{value:"One-value syntax:",id:"one-value-syntax",level:4},{value:"Two-value syntax:",id:"two-value-syntax",level:4},{value:"Three-value syntax:",id:"three-value-syntax",level:4},{value:"Array syntax",id:"array-syntax",level:4}];function d(e){const n=Object.assign({p:"p",h2:"h2",div:"div",hr:"hr",h1:"h1",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",blockquote:"blockquote",strong:"strong",a:"a",h4:"h4",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BSafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Bscale%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BscaleX%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BscaleY%3A%202%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Brotate%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BrotateX%3A%20'45deg'%7D%2C%20%7BrotateZ%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BrotateY%3A%20'45deg'%7D%2C%20%7BrotateZ%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewX%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewY%3A%20'45deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BskewX%3A%20'30deg'%7D%2C%20%7BskewY%3A%20'30deg'%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BtranslateX%3A%20-50%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BtranslateY%3A%2050%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%3C%2FSafeAreaView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20paddingBottom%3A%2060%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20'%23000'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"transform",children:"Transform"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"transform"})," accepts an array of transformation objects or space-separated string values. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."]}),"\n",(0,r.jsx)(n.p,{children:"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transform: [{rotateX: '45deg'}, {rotateZ: '0.785398rad'}],\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The same could also be achieved using a space-separated string:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transform: 'rotateX(45deg) rotateZ(0.785398rad)',\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transform: [{skewX: '45deg'}],\n}\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["array of objects: ",(0,r.jsx)(n.code,{children:"{matrix: number[]}"}),", ",(0,r.jsx)(n.code,{children:"{perspective: number}"}),", ",(0,r.jsx)(n.code,{children:"{rotate: string}"}),", ",(0,r.jsx)(n.code,{children:"{rotateX: string}"}),", ",(0,r.jsx)(n.code,{children:"{rotateY: string}"}),", ",(0,r.jsx)(n.code,{children:"{rotateZ: string}"}),", ",(0,r.jsx)(n.code,{children:"{scale: number}"}),", ",(0,r.jsx)(n.code,{children:"{scaleX: number}"}),", ",(0,r.jsx)(n.code,{children:"{scaleY: number}"}),", ",(0,r.jsx)(n.code,{children:"{translateX: number}"}),", ",(0,r.jsx)(n.code,{children:"{translateY: number}"}),", ",(0,r.jsx)(n.code,{children:"{skewX: string}"}),", ",(0,r.jsx)(n.code,{children:"{skewY: string}"})," or string"]}),(0,r.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",children:[(0,r.jsx)(n.code,{children:"decomposedMatrix"}),", ",(0,r.jsx)(n.code,{children:"rotation"}),", ",(0,r.jsx)(n.code,{children:"scaleX"}),", ",(0,r.jsx)(n.code,{children:"scaleY"}),", ",(0,r.jsx)(n.code,{children:"transformMatrix"}),", ",(0,r.jsx)(n.code,{children:"translateX"}),", ",(0,r.jsx)(n.code,{children:"translateY"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deprecated."})," Use the ",(0,r.jsx)(n.a,{href:"transforms#transform",children:(0,r.jsx)(n.code,{children:"transform"})})," prop instead."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"transform-origin",children:"Transform Origin"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"transformOrigin"})," property sets the origin for a view's transformations. The transform origin is the point around which a transformation is applied. By default, the origin of a transform is ",(0,r.jsx)(n.code,{children:"center"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"TransformOrigin","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BAnimated%2C%20View%2C%20StyleSheet%2C%20SafeAreaView%2C%20Easing%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20rotateAnim%20%3D%20useRef(new%20Animated.Value(0)).current%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Animated.loop(%5Cn%20%20%20%20%20%20Animated.timing(rotateAnim%2C%20%7B%5Cn%20%20%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20%20%20duration%3A%205000%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.linear%2C%5Cn%20%20%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%20%20%7D)%2C%5Cn%20%20%20%20).start()%3B%5Cn%20%20%7D%2C%20%5BrotateAnim%5D)%3B%5Cn%5Cn%20%20const%20spin%20%3D%20rotateAnim.interpolate(%7B%5Cn%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%5Cn%20%20%20%20outputRange%3A%20%5B'0deg'%2C%20'360deg'%5D%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.transformOriginWrapper%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.transformOriginView%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7Brotate%3A%20spin%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20transformOriginWrapper%3A%20%7B%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20borderColor%3A%20'rgba(0%2C%200%2C%200%2C%200.5)'%2C%5Cn%20%20%7D%2C%5Cn%20%20transformOriginView%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'pink'%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20transformOrigin%3A%20'top'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsxs)(n.p,{children:["Transform origin supports ",(0,r.jsx)(n.code,{children:"px"}),", ",(0,r.jsx)(n.code,{children:"percentage"})," and keywords ",(0,r.jsx)(n.code,{children:"top"}),", ",(0,r.jsx)(n.code,{children:"left"}),", ",(0,r.jsx)(n.code,{children:"right"}),", ",(0,r.jsx)(n.code,{children:"bottom"}),", ",(0,r.jsx)(n.code,{children:"center"})," values."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"transformOrigin"})," property may be specified using one, two, or three values, where each value represents an offset."]}),"\n",(0,r.jsx)(n.h4,{id:"one-value-syntax",children:"One-value syntax:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The value must be a ",(0,r.jsx)(n.code,{children:"px"}),", a ",(0,r.jsx)(n.code,{children:"percentage"}),", or one of the keywords ",(0,r.jsx)(n.code,{children:"left"}),", ",(0,r.jsx)(n.code,{children:"center"}),", ",(0,r.jsx)(n.code,{children:"right"}),", ",(0,r.jsx)(n.code,{children:"top"}),", and ",(0,r.jsx)(n.code,{children:"bottom"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transformOrigin: '20px',\n  transformOrigin: 'bottom',\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"two-value-syntax",children:"Two-value syntax:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First value (x-offset) must be a ",(0,r.jsx)(n.code,{children:"px"}),", a ",(0,r.jsx)(n.code,{children:"percentage"}),", or one of the keywords ",(0,r.jsx)(n.code,{children:"left"}),", ",(0,r.jsx)(n.code,{children:"center"}),", and ",(0,r.jsx)(n.code,{children:"right"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The second value (y-offset) must be a ",(0,r.jsx)(n.code,{children:"px"}),", a ",(0,r.jsx)(n.code,{children:"percentage"}),", or one of the keywords ",(0,r.jsx)(n.code,{children:"top"}),", ",(0,r.jsx)(n.code,{children:"center"}),", and ",(0,r.jsx)(n.code,{children:"bottom"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transformOrigin: '10px 2px',\n  transformOrigin: 'left top',\n  transformOrigin: 'top right',\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"three-value-syntax",children:"Three-value syntax:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The first two values are the same as for the two-value syntax."}),"\n",(0,r.jsxs)(n.li,{children:["The third value (z-offset) must be a ",(0,r.jsx)(n.code,{children:"px"}),". It always represents the Z offset."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  transformOrigin: '2px 30% 10px',\n  transformOrigin: 'right bottom 20px',\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"array-syntax",children:"Array syntax"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"transformOrigin"})," also supports an array syntax. It makes it convenient to use it with Animated APIs. It also avoids string parsing, so should be more efficient."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  // Using numeric values\n  transformOrigin: [10, 30, 40],\n  // Mixing numeric and percentage values\n  transformOrigin: [10, '20%', 0],\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You may refer to MDN's guide on ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",children:"Transform origin"})," for additional information."]})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var r=t(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>a});var r=t(27378);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:a(e),r.createElement(s.Provider,{value:i},n)}}}]);