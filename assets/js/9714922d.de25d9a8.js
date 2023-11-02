/*! For license information please see 9714922d.de25d9a8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68819],{59239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(24246),r=t(71670),s=t(48375),o=t(86386),i=t(11674);const l={id:"network",title:"\u8bbf\u95ee\u7f51\u7edc"},c=void 0,d={unversionedId:"network",id:"version-0.71/network",title:"\u8bbf\u95ee\u7f51\u7edc",description:"\u5f88\u591a\u79fb\u52a8\u5e94\u7528\u90fd\u9700\u8981\u4ece\u8fdc\u7a0b\u5730\u5740\u4e2d\u83b7\u53d6\u6570\u636e\u6216\u8d44\u6e90\u3002\u4f60\u53ef\u80fd\u9700\u8981\u7ed9\u67d0\u4e2a REST API \u53d1\u8d77 POST \u8bf7\u6c42\u4ee5\u63d0\u4ea4\u7528\u6237\u6570\u636e\uff0c\u53c8\u6216\u8005\u53ef\u80fd\u4ec5\u4ec5\u9700\u8981\u4ece\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a\u83b7\u53d6\u4e00\u4e9b\u9759\u6001\u5185\u5bb9\u2014\u2014\u4ee5\u4e0b\u5c31\u662f\u4f60\u4f1a\u7528\u5230\u7684\u4e1c\u897f\u3002\u65b0\u624b\u53ef\u4ee5\u5bf9\u7167\u8fd9\u4e2a\u7b80\u77ed\u7684\u89c6\u9891\u6559\u7a0b\u52a0\u6df1\u7406\u89e3\u3002",source:"@site/versioned_docs/version-0.71/network.md",sourceDirName:".",slug:"/network",permalink:"/docs/0.71/network",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/network.md",tags:[],version:"0.71",frontMatter:{id:"network",title:"\u8bbf\u95ee\u7f51\u7edc"},sidebar:"docs",previous:{title:"\u66f4\u65b0",permalink:"/docs/0.71/upgrading"},next:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/0.71/security"}},u={},h=[{value:"\u4f7f\u7528 Fetch",id:"\u4f7f\u7528-fetch",level:2},{value:"\u53d1\u8d77\u8bf7\u6c42",id:"\u53d1\u8d77\u8bf7\u6c42",level:3},{value:"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e",id:"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e",level:3},{value:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93",id:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93",level:2},{value:"WebSocket \u652f\u6301",id:"websocket-\u652f\u6301",level:2},{value:"High Five!",id:"high-five",level:2},{value:"Known Issues with <code>fetch</code> and cookie based authentication",id:"known-issues-with-fetch-and-cookie-based-authentication",level:2},{value:"Configuring NSURLSession on iOS",id:"configuring-nsurlsession-on-ios",level:2}];function p(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",blockquote:"blockquote",div:"div",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u5f88\u591a\u79fb\u52a8\u5e94\u7528\u90fd\u9700\u8981\u4ece\u8fdc\u7a0b\u5730\u5740\u4e2d\u83b7\u53d6\u6570\u636e\u6216\u8d44\u6e90\u3002\u4f60\u53ef\u80fd\u9700\u8981\u7ed9\u67d0\u4e2a REST API \u53d1\u8d77 POST \u8bf7\u6c42\u4ee5\u63d0\u4ea4\u7528\u6237\u6570\u636e\uff0c\u53c8\u6216\u8005\u53ef\u80fd\u4ec5\u4ec5\u9700\u8981\u4ece\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a\u83b7\u53d6\u4e00\u4e9b\u9759\u6001\u5185\u5bb9\u2014\u2014\u4ee5\u4e0b\u5c31\u662f\u4f60\u4f1a\u7528\u5230\u7684\u4e1c\u897f\u3002\u65b0\u624b\u53ef\u4ee5\u5bf9\u7167\u8fd9\u4e2a",(0,a.jsx)(n.a,{href:"http://v.youku.com/v_show/id_XMTUyNTEwMTA5Ng==.html",children:"\u7b80\u77ed\u7684\u89c6\u9891\u6559\u7a0b"}),"\u52a0\u6df1\u7406\u89e3\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-fetch",children:"\u4f7f\u7528 Fetch"}),"\n",(0,a.jsxs)(n.p,{children:["React Native \u63d0\u4f9b\u4e86\u548c web \u6807\u51c6\u4e00\u81f4\u7684",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"}),"\uff0c\u7528\u4e8e\u6ee1\u8db3\u5f00\u53d1\u8005\u8bbf\u95ee\u7f51\u7edc\u7684\u9700\u6c42\u3002\u5982\u679c\u4f60\u4e4b\u524d\u4f7f\u7528\u8fc7",(0,a.jsx)(n.code,{children:"XMLHttpRequest"}),"(\u5373\u4fd7\u79f0\u7684 ajax)\u6216\u662f\u5176\u4ed6\u7684\u7f51\u7edc API\uff0c\u90a3\u4e48 Fetch \u7528\u8d77\u6765\u5c06\u4f1a\u76f8\u5f53\u5bb9\u6613\u4e0a\u624b\u3002\u8fd9\u7bc7\u6587\u6863\u53ea\u4f1a\u5217\u51fa Fetch \u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5e76\u4e0d\u4f1a\u8bb2\u8ff0\u592a\u591a\u7ec6\u8282\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u559c\u6b22\u7684\u641c\u7d22\u5f15\u64ce\u53bb\u641c\u7d22",(0,a.jsx)(n.code,{children:"fetch api"}),"\u5173\u952e\u5b57\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u53d1\u8d77\u8bf7\u6c42",children:"\u53d1\u8d77\u8bf7\u6c42"}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u4ece\u4efb\u610f\u5730\u5740\u83b7\u53d6\u5185\u5bb9\u7684\u8bdd\uff0c\u53ea\u9700\u7b80\u5355\u5730\u5c06\u7f51\u5740\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9 fetch \u65b9\u6cd5\u5373\u53ef\uff08fetch \u8fd9\u4e2a\u8bcd\u672c\u8eab\u4e5f\u5c31\u662f",(0,a.jsx)(n.code,{children:"\u83b7\u53d6"}),"\u7684\u610f\u601d\uff09\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"fetch('https://mywebsite.com/mydata.json');\n"})}),"\n",(0,a.jsx)(n.p,{children:"Fetch \u8fd8\u6709\u53ef\u9009\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u5b9a\u5236 HTTP \u8bf7\u6c42\u4e00\u4e9b\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a header \u53c2\u6570\uff0c\u6216\u662f\u6307\u5b9a\u4f7f\u7528 POST \u65b9\u6cd5\uff0c\u53c8\u6216\u662f\u63d0\u4ea4\u6570\u636e\u7b49\u7b49\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"fetch('https://mywebsite.com/endpoint/', {\n  method: 'POST',\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    firstParam: 'yourValue',\n    secondParam: 'yourOtherValue'\n  })\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u63d0\u4ea4\u6570\u636e\u7684\u683c\u5f0f\u5173\u952e\u53d6\u51b3\u4e8e headers \u4e2d\u7684",(0,a.jsx)(n.code,{children:"Content-Type"}),"\u3002",(0,a.jsx)(n.code,{children:"Content-Type"}),"\u6709\u5f88\u591a\u79cd\uff0c\u5bf9\u5e94 body \u7684\u683c\u5f0f\u4e5f\u6709\u533a\u522b\u3002\u5230\u5e95\u5e94\u8be5\u91c7\u7528\u4ec0\u4e48\u6837\u7684",(0,a.jsx)(n.code,{children:"Content-Type"}),"\u53d6\u51b3\u4e8e\u670d\u52a1\u5668\u7aef\uff0c\u6240\u4ee5\u8bf7\u548c\u670d\u52a1\u5668\u7aef\u7684\u5f00\u53d1\u4eba\u5458\u6c9f\u901a\u786e\u5b9a\u6e05\u695a\u3002\u5e38\u7528\u7684'Content-Type'\u9664\u4e86\u4e0a\u9762\u7684'application/json'\uff0c\u8fd8\u6709\u4f20\u7edf\u7684\u7f51\u9875\u8868\u5355\u5f62\u5f0f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"fetch('https://mywebsite.com/endpoint/', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/x-www-form-urlencoded'\n  },\n  body: 'key1=value1&key2=value2'\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:"Fetch \u8bf7\u6c42\u6587\u6863"}),"\u6765\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684\u53c2\u6570\u3002"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u4f7f\u7528 Chrome \u8c03\u8bd5\u76ee\u524d\u65e0\u6cd5\u89c2\u6d4b\u5230 React Native \u4e2d\u7684\u7f51\u7edc\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684",(0,a.jsx)(n.a,{href:"https://github.com/jhen0409/react-native-debugger",children:"react-native-debugger"}),"\u6765\u8fdb\u884c\u89c2\u6d4b\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e",children:"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u53d1\u8d77\u8bf7\u6c42\u3002\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u8fd8\u9700\u8981\u5904\u7406\u670d\u52a1\u5668\u56de\u590d\u7684\u6570\u636e\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u7f51\u7edc\u8bf7\u6c42\u5929\u7136\u662f\u4e00\u79cd\u5f02\u6b65\u64cd\u4f5c\u3002Fetch \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"Promise"}),"\uff0c\u8fd9\u79cd\u6a21\u5f0f\u53ef\u4ee5\u7b80\u5316\u5f02\u6b65\u98ce\u683c\u7684\u4ee3\u7801\uff08\u8bd1\u6ce8\uff1a\u540c\u6837\u7684\uff0c\u5982\u679c\u4f60\u4e0d\u4e86\u89e3 promise\uff0c\u5efa\u8bae\u4f7f\u7528\u641c\u7d22\u5f15\u64ce\u8865\u8bfe\uff09\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"function getMoviesFromApiAsync() {\n  return fetch(\n    'https://facebook.github.io/react-native/movies.json'\n  )\n    .then((response) => response.json())\n    .then((responseJson) => {\n      return responseJson.movies;\n    })\n    .catch((error) => {\n      console.error(error);\n    });\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5728 React Native \u5e94\u7528\u4e2d\u4f7f\u7528 ES2017 \u6807\u51c6\u4e2d\u7684",(0,a.jsx)(n.code,{children:"async"}),"/",(0,a.jsx)(n.code,{children:"await"})," \u8bed\u6cd5\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// \u6ce8\u610f\u8fd9\u4e2a\u65b9\u6cd5\u524d\u9762\u6709async\u5173\u952e\u5b57\nasync function getMoviesFromApi() {\n  try {\n    // \u6ce8\u610f\u8fd9\u91cc\u7684await\u8bed\u53e5\uff0c\u5176\u6240\u5728\u7684\u51fd\u6570\u5fc5\u987b\u6709async\u5173\u952e\u5b57\u58f0\u660e\n    let response = await fetch(\n      'https://facebook.github.io/react-native/movies.json'\n    );\n    let responseJson = await response.json();\n    return responseJson.movies;\n  } catch (error) {\n    console.error(error);\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u522b\u5fd8\u4e86 catch \u4f4f",(0,a.jsx)(n.code,{children:"fetch"}),"\u53ef\u80fd\u629b\u51fa\u7684\u5f02\u5e38\uff0c\u5426\u5219\u51fa\u9519\u65f6\u4f60\u53ef\u80fd\u770b\u4e0d\u5230\u4efb\u4f55\u63d0\u793a\u3002"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,children:[(0,a.jsx)(o.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%2C%20useState%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%5Cn%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(%5B%5D)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%5Cn%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%5Cn%20%20%20%20%20%20.then((json)%20%3D%3E%20setData(json.movies))%5Cn%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%5Cn%20%20%20%20%20%20.finally(()%20%3D%3E%20setLoading(false))%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%5Cn%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%5Cn%20%20%20%20this.state%20%3D%20%7B%5Cn%20%20%20%20%20%20data%3A%20%5B%5D%2C%5Cn%20%20%20%20%20%20isLoading%3A%20true%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%5Cn%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%5Cn%20%20%20%20%20%20.then((json)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7B%20data%3A%20json.movies%20%7D)%3B%5Cn%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%5Cn%20%20%20%20%20%20.finally(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7B%20isLoading%3A%20false%20%7D)%3B%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7B%20data%2C%20isLoading%20%7D%20%3D%20this.state%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ciOS \u4f1a\u963b\u6b62\u6240\u6709 http \u7684\u8bf7\u6c42\uff0c\u4ee5\u7763\u4fc3\u5f00\u53d1\u8005\u4f7f\u7528 https\u3002\u5982\u679c\u4f60\u4ecd\u7136\u9700\u8981\u4f7f\u7528 http \u534f\u8bae\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a App Transport Security \u7684\u4f8b\u5916\uff0c\u8be6\u7ec6\u53ef\u53c2\u8003",(0,a.jsx)(n.a,{href:"https://segmentfault.com/a/1190000002933776",children:"\u8fd9\u7bc7\u5e16\u5b50"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4ece Android9 \u5f00\u59cb\uff0c\u4e5f\u4f1a\u9ed8\u8ba4\u963b\u6b62 http \u8bf7\u6c42\uff0c\u8bf7\u53c2\u8003",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/qq_40347548/article/details/86766932",children:"\u76f8\u5173\u914d\u7f6e"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93",children:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93"}),"\n",(0,a.jsxs)(n.p,{children:["React Native \u4e2d\u5df2\u7ecf\u5185\u7f6e\u4e86",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XMLHttpRequest API"}),"(\u4e5f\u5c31\u662f\u4fd7\u79f0\u7684 ajax)\u3002\u4e00\u4e9b\u57fa\u4e8e XMLHttpRequest \u5c01\u88c5\u7684\u7b2c\u4e09\u65b9\u5e93\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f8b\u5982",(0,a.jsx)(n.a,{href:"https://github.com/niftylettuce/frisbee",children:"frisbee"}),"\u6216\u662f",(0,a.jsx)(n.a,{href:"https://github.com/mzabriskie/axios",children:"axios"}),"\u7b49\u3002\u4f46\u6ce8\u610f\u4e0d\u80fd\u4f7f\u7528 jQuery\uff0c\u56e0\u4e3a jQuery \u4e2d\u8fd8\u4f7f\u7528\u4e86\u5f88\u591a\u6d4f\u89c8\u5668\u4e2d\u624d\u6709\u800c RN \u4e2d\u6ca1\u6709\u7684\u4e1c\u897f\uff08\u6240\u4ee5\u4e5f\u4e0d\u662f\u6240\u6709 web \u4e2d\u7684 ajax \u5e93\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff09\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const request = new XMLHttpRequest();\nrequest.onreadystatechange = (e) => {\n  if (request.readyState !== 4) {\n    return;\n  }\n\n  if (request.status === 200) {\n    console.log('success', request.responseText);\n  } else {\n    console.warn('error');\n  }\n};\n\nrequest.open('GET', 'https://mywebsite.com/endpoint/');\nrequest.send();\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b89\u5168\u673a\u5236\u4e0e\u7f51\u9875\u73af\u5883\u6709\u6240\u4e0d\u540c\uff1a\u5728\u5e94\u7528\u4e2d\u4f60\u53ef\u4ee5\u8bbf\u95ee\u4efb\u4f55\u7f51\u7ad9\uff0c\u6ca1\u6709",(0,a.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing",children:"\u8de8\u57df"}),"\u7684\u9650\u5236\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"websocket-\u652f\u6301",children:"WebSocket \u652f\u6301"}),"\n",(0,a.jsxs)(n.p,{children:["React Native \u8fd8\u652f\u6301",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"WebSocket"}),"\uff0c\u8fd9\u79cd\u534f\u8bae\u53ef\u4ee5\u5728\u5355\u4e2a TCP \u8fde\u63a5\u4e0a\u63d0\u4f9b\u5168\u53cc\u5de5\u7684\u901a\u4fe1\u4fe1\u9053\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const ws = new WebSocket('ws://host.com/path');\n\nws.onopen = () => {\n  // connection opened\n  ws.send('something'); // send a message\n};\n\nws.onmessage = (e) => {\n  // a message was received\n  console.log(e.data);\n};\n\nws.onerror = (e) => {\n  // an error occurred\n  console.log(e.message);\n};\n\nws.onclose = (e) => {\n  // connection closed\n  console.log(e.code, e.reason);\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"high-five",children:"High Five!"}),"\n",(0,a.jsxs)(n.p,{children:["\u73b0\u5728\u4f60\u7684\u5e94\u7528\u5df2\u7ecf\u53ef\u4ee5\u4ece\u5404\u79cd\u6e20\u9053\u83b7\u53d6\u6570\u636e\u4e86\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u9762\u4e34\u7684\u95ee\u9898\u591a\u534a\u5c31\u662f\u5982\u4f55\u5728\u4e0d\u540c\u7684\u9875\u9762\u95f4\u7ec4\u7ec7\u548c\u4e32\u8054\u5185\u5bb9\u4e86\u3002\u8981\u7ba1\u7406\u9875\u9762\u7684\u8df3\u8f6c\uff0c\u4f60\u9700\u8981\u5b66\u4e60",(0,a.jsx)(n.a,{href:"/docs/0.71/navigation",children:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762"}),"\u3002"]}),"\n",(0,a.jsxs)(n.h2,{id:"known-issues-with-fetch-and-cookie-based-authentication",children:["Known Issues with ",(0,a.jsx)(n.code,{children:"fetch"})," and cookie based authentication"]}),"\n",(0,a.jsxs)(n.p,{children:["The following options are currently not working with ",(0,a.jsx)(n.code,{children:"fetch"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"redirect:manual"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"credentials:omit"})}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994",children:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Cookie based authentication is currently unstable. You can view some of the issues raised here: ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/23185",children:"https://github.com/facebook/react-native/issues/23185"})]}),"\n",(0,a.jsxs)(n.li,{children:["As a minimum on iOS, when redirected through a ",(0,a.jsx)(n.code,{children:"302"}),", if a ",(0,a.jsx)(n.code,{children:"Set-Cookie"})," header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuring-nsurlsession-on-ios",children:"Configuring NSURLSession on iOS"}),"\n",(0,a.jsxs)(n.p,{children:["For some applications it may be appropriate to provide a custom ",(0,a.jsx)(n.code,{children:"NSURLSessionConfiguration"})," for the underlying ",(0,a.jsx)(n.code,{children:"NSURLSession"})," that is used for network requests in a React Native application running on iOS. For instance, one may need to set a custom user agent string for all network requests coming from the app or supply ",(0,a.jsx)(n.code,{children:"NSURLSession"})," with an emphemeral ",(0,a.jsx)(n.code,{children:"NSURLSessionConfiguration"}),". The function ",(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," allows for such customization. Remember to add the following import to the file in which ",(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," will be called:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:"#import <React/RCTHTTPRequestHandler.h>\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," should be called early in the application life cycle such that it is readily available when needed by React, for instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:"-(void)application:(__unused UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  // set RCTSetCustomNSURLSessionConfigurationProvider\n  RCTSetCustomNSURLSessionConfigurationProvider(^NSURLSessionConfiguration *{\n     NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];\n     // configure the session\n     return configuration;\n  });\n  // set up React\n  _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];\n}\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(27378),r=t(38944);const s={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&d(e,t,n[t]);return e};function h({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>q});var a=t(27378),r=t(38944),s=t(12112),o=t(3620),i=t(69490),l=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&v(e,t,n[t]);if(f)for(var t of f(n))b.call(n,t)&&v(e,t,n[t]);return e},j=(e,n)=>h(e,p(n));function x(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function C(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return x(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y({value:e,tabValues:n}){return n.some((n=>n.value===e))}function w({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(j(g({},t.location),{search:n.toString()}))}),[r,t])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=C(e),[o,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=w({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:h;return y({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var D=t(14185);const S={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,B=Object.defineProperties,O=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,N=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,P=(e,n)=>{for(var t in n||(n={}))A.call(n,t)&&N(e,t,n[t]);if(T)for(var t of T(n))R.call(n,t)&&N(e,t,n[t]);return e},I=(e,n)=>B(e,O(n));function F({className:e,block:n,selectedValue:t,selectValue:o,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(c(n),o(r))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=null!=(t=l[n])?t:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},i.map((({value:e,label:n,attributes:s})=>a.createElement("li",I(P({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:d},s),{className:(0,r.Z)("tabs__item",S.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function L({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function _(e){const n=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",S.tabList)},a.createElement(F,P(P({},e),n)),a.createElement(L,P(P({},e),n)))}function q(e){const n=(0,D.Z)();return a.createElement(_,P({key:String(n)},e),x(e.children))}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,s={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>s});var a=t(27378);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:s(e),a.createElement(r.Provider,{value:i},n)}}}]);