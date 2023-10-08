/*! For license information please see 1de587e0.2af86e60.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13190],{96388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>C,toc:()=>o});var i=t(24246),l=t(71670);const r={id:"text-style-props",title:"Text \u6837\u5f0f\u5c5e\u6027"},d=void 0,C={unversionedId:"text-style-props",id:"version-0.71/text-style-props",title:"Text \u6837\u5f0f\u5c5e\u6027",description:"\u793a\u4f8b",source:"@site/versioned_docs/version-0.71/text-style-props.md",sourceDirName:".",slug:"/text-style-props",permalink:"/docs/0.71/text-style-props",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/text-style-props.md",tags:[],version:"0.71",frontMatter:{id:"text-style-props",title:"Text \u6837\u5f0f\u5c5e\u6027"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027",permalink:"/docs/0.71/shadow-props"},next:{title:"View \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/0.71/view-style-props"}},s={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>textShadowOffset</code>",id:"textshadowoffset",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>fontSize</code>",id:"fontsize",level:3},{value:"<code>fontStyle</code>",id:"fontstyle",level:3},{value:"<code>fontWeight</code>",id:"fontweight",level:3},{value:"<code>lineHeight</code>",id:"lineheight",level:3},{value:"<code>textAlign</code>",id:"textalign",level:3},{value:"<code>textDecorationLine</code>",id:"textdecorationline",level:3},{value:"<code>textShadowColor</code>",id:"textshadowcolor",level:3},{value:"<code>fontFamily</code>",id:"fontfamily",level:3},{value:"<code>textShadowRadius</code>",id:"textshadowradius",level:3},{value:"<code>includeFontPadding</code>",id:"includefontpadding",level:3},{value:"<code>textAlignVertical</code>",id:"textalignvertical",level:3},{value:"<code>fontVariant</code>",id:"fontvariant",level:3},{value:"<code>letterSpacing</code>",id:"letterspacing",level:3},{value:"<code>textDecorationColor</code>",id:"textdecorationcolor",level:3},{value:"<code>textDecorationStyle</code>",id:"textdecorationstyle",level:3},{value:"<code>textTransform</code>",id:"texttransform",level:3},{value:"<code>writingDirection</code>",id:"writingdirection",level:3}];function c(e){const n=Object.assign({h3:"h3",div:"div",h1:"h1",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",a:"a",p:"p"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"TextStyleProps","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20FlatList%2C%20Platform%2C%20ScrollView%2C%20StyleSheet%2C%20Switch%2C%20Text%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20fontStyles%20%3D%20%5B%5C%22normal%5C%22%2C%20%5C%22italic%5C%22%5D%3B%5Cnconst%20fontVariants%20%3D%20%5B%5Cn%20%20undefined%2C%5Cn%20%20%5C%22small-caps%5C%22%2C%5Cn%20%20%5C%22oldstyle-nums%5C%22%2C%5Cn%20%20%5C%22lining-nums%5C%22%2C%5Cn%20%20%5C%22tabular-nums%5C%22%2C%5Cn%20%20%5C%22proportional-nums%5C%22%5Cn%5D%3B%5Cnconst%20fontWeights%20%3D%20%5B%5Cn%20%20%5C%22normal%5C%22%2C%5Cn%20%20%5C%22bold%5C%22%2C%5Cn%20%20%5C%22100%5C%22%2C%5Cn%20%20%5C%22200%5C%22%2C%5Cn%20%20%5C%22300%5C%22%2C%5Cn%20%20%5C%22400%5C%22%2C%5Cn%20%20%5C%22500%5C%22%2C%5Cn%20%20%5C%22600%5C%22%2C%5Cn%20%20%5C%22700%5C%22%2C%5Cn%20%20%5C%22800%5C%22%2C%5Cn%20%20%5C%22900%5C%22%5Cn%5D%3B%5Cnconst%20textAlignments%20%3D%20%5B%5C%22auto%5C%22%2C%20%5C%22left%5C%22%2C%20%5C%22right%5C%22%2C%20%5C%22center%5C%22%2C%20%5C%22justify%5C%22%5D%3B%5Cnconst%20textDecorationLines%20%3D%20%5B%5Cn%20%20%5C%22none%5C%22%2C%5Cn%20%20%5C%22underline%5C%22%2C%5Cn%20%20%5C%22line-through%5C%22%2C%5Cn%20%20%5C%22underline%20line-through%5C%22%5Cn%5D%3B%5Cnconst%20textDecorationStyles%20%3D%20%5B%5C%22solid%5C%22%2C%20%5C%22double%5C%22%2C%20%5C%22dotted%5C%22%2C%20%5C%22dashed%5C%22%5D%3B%5Cnconst%20textTransformations%20%3D%20%5B%5C%22none%5C%22%2C%20%5C%22uppercase%5C%22%2C%20%5C%22lowercase%5C%22%2C%20%5C%22capitalize%5C%22%5D%3B%5Cnconst%20textAlignmentsVertical%20%3D%20%5B%5C%22auto%5C%22%2C%20%5C%22top%5C%22%2C%20%5C%22bottom%5C%22%2C%20%5C%22center%5C%22%5D%3B%5Cnconst%20writingDirections%20%3D%20%5B%5C%22auto%5C%22%2C%20%5C%22ltr%5C%22%2C%20%5C%22rtl%5C%22%5D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfontSize%2C%20setFontSize%5D%20%3D%20useState(10)%3B%5Cn%20%20const%20%5BfontStyleIdx%2C%20setFontStyleIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BfontWeightIdx%2C%20setFontWeightIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BlineHeight%2C%20setLineHeight%5D%20%3D%20useState(10)%3B%5Cn%20%20const%20%5BtextAlignIdx%2C%20setTextAlignIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BtextDecorationLineIdx%2C%20setTextDecorationLineIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BincludeFontPadding%2C%20setIncludeFontPadding%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BtextVerticalAlignIdx%2C%20setTextVerticalAlignIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BfontVariantIdx%2C%20setFontVariantIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BletterSpacing%2C%20setLetterSpacing%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BtextDecorationStyleIdx%2C%20setTextDecorationStyleIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BtextTransformIdx%2C%20setTextTransformIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BwritingDirectionIdx%2C%20setWritingDirectionIdx%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BtextShadowRadius%2C%20setTextShadowRadius%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BtextShadowOffset%2C%20setTextShadowOffset%5D%20%3D%20useState(%7B%5Cn%20%20%20%20height%3A%200%2C%5Cn%20%20%20%20width%3A%200%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.paragraph%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20fontSize%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20fontStyle%3A%20fontStyles%5BfontStyleIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20fontWeights%5BfontWeightIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20lineHeight%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textAlign%3A%20textAlignments%5BtextAlignIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textDecorationLine%3A%20textDecorationLines%5BtextDecorationLineIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textTransform%3A%20textTransformations%5BtextTransformIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textAlignVertical%3A%20textAlignmentsVertical%5BtextVerticalAlignIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20fontVariant%3A%20%5BfontVariants%5BfontVariantIdx%5D%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20letterSpacing%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20includeFontPadding%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textDecorationStyle%3A%20textDecorationStyles%5BtextDecorationStyleIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20writingDirection%3A%20writingDirections%5BwritingDirectionIdx%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textShadowOffset%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20textShadowRadius%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%5Cn%20%20%20%20%20%20%20%20industry.%20112%20Likes%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CScrollView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ECommon%20platform%20properties%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Shadow%20Offset%20-%20Height%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowOffset.height%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-40%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7Bval%20%3D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTextShadowOffset(prev%20%3D%3E%20(%7B%20...prev%2C%20height%3A%20val%20%7D))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Shadow%20Offset%20-%20Width%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowOffset.width%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-40%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7Bval%20%3D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTextShadowOffset(prev%20%3D%3E%20(%7B%20...prev%2C%20width%3A%20val%20%7D))%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Font%20Size%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BfontSize%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B40%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetFontSize%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Font%20Style%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontStyles%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontStyleIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontStyleIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Font%20Weight%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontWeights%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontWeightIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontWeightIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Line%20Height%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BlineHeight%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B10%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetLineHeight%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Align%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextAlignments%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextAlignIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextAlignIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Decoration%20Line%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextDecorationLines%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextDecorationLineIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextDecorationLineIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Shadow%20Radius%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BtextShadowRadius%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetTextShadowRadius%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Font%20Variant%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BfontVariants%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BfontVariantIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetFontVariantIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomSlider%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Letter%20Spacing%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20step%3D%7B0.1%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BletterSpacing%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetLetterSpacing%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Transform%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextTransformations%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextTransformIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextTransformIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.platformContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.platformContainerTitle%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20Android%20only%20properties%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Vertical%20Align%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextAlignmentsVertical%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextVerticalAlignIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextVerticalAlignIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomSwitch%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Include%20Font%20Padding%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20handleValueChange%3D%7BsetIncludeFontPadding%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7BincludeFontPadding%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20%5C%22ios%5C%22%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.platformContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.platformContainerTitle%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20iOS%20only%20properties%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Text%20Decoration%20Style%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BtextDecorationStyles%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BtextDecorationStyleIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetTextDecorationStyleIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CCustomPicker%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D%5C%22Writing%20Direction%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7BwritingDirections%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20currentIndex%3D%7BwritingDirectionIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelected%3D%7BsetWritingDirectionIdx%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20CustomSwitch%20%3D%20(%7B%20label%2C%20handleValueChange%2C%20value%20%7D)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20%5C%22flex-start%5C%22%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CSwitch%5Cn%20%20%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%5C%22%23767577%5C%22%2C%20true%3A%20%5C%22%23DAA520%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20thumbColor%3D%7Bvalue%20%3F%20%5C%22%23DAA520%5C%22%20%3A%20%5C%22%23f4f3f4%5C%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BhandleValueChange%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20CustomSlider%20%3D%20(%7B%5Cn%20%20label%2C%5Cn%20%20handleValueChange%2C%5Cn%20%20step%20%3D%201%2C%5Cn%20%20minimumValue%20%3D%200%2C%5Cn%20%20maximumValue%20%3D%2010%2C%5Cn%20%20value%5Cn%7D)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%7Blabel%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7B%60%24%7Blabel%7D%20(%24%7Bvalue.toFixed(2)%7D)%60%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.wrapperHorizontal%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CSlider%5Cn%20%20%20%20%20%20%20%20%20%20thumbTintColor%3D%5C%22%23DAA520%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumTrackTintColor%3D%5C%22%23DAA520%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7BminimumValue%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7BmaximumValue%7D%5Cn%20%20%20%20%20%20%20%20%20%20step%3D%7Bstep%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BhandleValueChange%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20CustomPicker%20%3D%20(%7B%20label%2C%20data%2C%20currentIndex%2C%20onSelected%20%7D)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%7Blabel%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.wrapperHorizontal%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20bounces%5Cn%20%20%20%20%20%20%20%20%20%20horizontal%5Cn%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20idx)%20%3D%3E%20String(item)%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%2C%20index%20%7D)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20const%20selected%20%3D%20index%20%3D%3D%3D%20currentIndex%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7B()%20%3D%3E%20onSelected(index)%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20styles.itemStyleHorizontal%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selected%20%26%26%20styles.itemSelectedStyleHorizontal%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20selected%20%3F%20%5C%22black%5C%22%20%3A%20%5C%22grey%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20selected%20%3F%20%5C%22bold%5C%22%20%3A%20%5C%22normal%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem%20%2B%20%5C%22%5C%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22black%5C%22%2C%5Cn%20%20%20%20textDecorationColor%3A%20%5C%22yellow%5C%22%2C%5Cn%20%20%20%20textShadowColor%3A%20%5C%22red%5C%22%2C%5Cn%20%20%20%20textShadowRadius%3A%201%2C%5Cn%20%20%20%20margin%3A%2024%5Cn%20%20%7D%2C%5Cn%20%20wrapperHorizontal%3A%20%7B%5Cn%20%20%20%20height%3A%2054%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22black%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2012%5Cn%20%20%7D%2C%5Cn%20%20itemStyleHorizontal%3A%20%7B%5Cn%20%20%20%20marginRight%3A%2010%2C%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22grey%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%2025%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20itemSelectedStyleHorizontal%3A%20%7B%5Cn%20%20%20%20borderWidth%3A%202%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23DAA520%5C%22%5Cn%20%20%7D%2C%5Cn%20%20platformContainer%3A%20%7B%5Cn%20%20%20%20marginTop%3A%208%2C%5Cn%20%20%20%20borderTopWidth%3A%201%5Cn%20%20%7D%2C%5Cn%20%20platformContainerTitle%3A%20%7B%5Cn%20%20%20%20marginTop%3A%208%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20marginVertical%3A%204%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,i.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n.h3,{id:"textshadowoffset",children:(0,i.jsx)(n.code,{children:"textShadowOffset"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["object: ",(0,i.jsx)(n.code,{children:"{width: number,height: number}"})]}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"color",children:(0,i.jsx)(n.code,{children:"color"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fontsize",children:(0,i.jsx)(n.code,{children:"fontSize"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fontstyle",children:(0,i.jsx)(n.code,{children:"fontStyle"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('normal', 'italic')"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fontweight",children:(0,i.jsx)(n.code,{children:"fontWeight"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"lineheight",children:(0,i.jsx)(n.code,{children:"lineHeight"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textalign",children:(0,i.jsx)(n.code,{children:"textAlign"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies text alignment. The value 'justify' is only supported on iOS and fallbacks to ",(0,i.jsx)(n.code,{children:"left"})," on Android."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('auto', 'left', 'right', 'center', 'justify')"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textdecorationline",children:(0,i.jsx)(n.code,{children:"textDecorationLine"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('none', 'underline', 'line-through', 'underline line-through')"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textshadowcolor",children:(0,i.jsx)(n.code,{children:"textShadowColor"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fontfamily",children:(0,i.jsx)(n.code,{children:"fontFamily"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textshadowradius",children:(0,i.jsx)(n.code,{children:"textShadowRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"includefontpadding",children:(0,i.jsx)(n.code,{children:"includeFontPadding"})}),"\n",(0,i.jsxs)(n.p,{children:["Set to ",(0,i.jsx)(n.code,{children:"false"})," to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set ",(0,i.jsx)(n.code,{children:"textAlignVertical"})," to ",(0,i.jsx)(n.code,{children:"center"}),". Default is true."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textalignvertical",children:(0,i.jsx)(n.code,{children:"textAlignVertical"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('auto', 'top', 'bottom', 'center')"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fontvariant",children:(0,i.jsx)(n.code,{children:"fontVariant"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"array of enum('small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums')"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"iOS, Android >= 5.0"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"letterspacing",children:(0,i.jsx)(n.code,{children:"letterSpacing"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"iOS, Android >= 5.0"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textdecorationcolor",children:(0,i.jsx)(n.code,{children:"textDecorationColor"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"iOS"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"textdecorationstyle",children:(0,i.jsx)(n.code,{children:"textDecorationStyle"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('solid', 'double', 'dotted', 'dashed')"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"iOS"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"texttransform",children:(0,i.jsx)(n.code,{children:"textTransform"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('none', 'uppercase', 'lowercase', 'capitalize')"}),(0,i.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"writingdirection",children:(0,i.jsx)(n.code,{children:"writingDirection"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enum('auto', 'ltr', 'rtl')"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"iOS"})]})})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,t)=>{var i=t(27378),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var i,r={},o=null,c=null;for(i in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,i)&&!s.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:l,type:e,key:o,ref:c,props:r,_owner:C.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>C,ah:()=>r});var i=t(27378);const l=i.createContext({});function r(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function C({components:e,children:n,disableParentContext:t}){let C;return C=t?"function"==typeof e?e({}):e||d:r(e),i.createElement(l.Provider,{value:C},n)}}}]);