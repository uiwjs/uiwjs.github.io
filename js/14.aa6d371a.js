webpackJsonp([14],{869:function(n,e){n.exports="Rate \u8bc4\u5206\n===\n\n\u8bc4\u5206\u7ec4\u4ef6\n\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nrender() {\n  return (\n    <Rate/>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u53ea\u8bfb\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nrender() {\n  return (\n    <Rate value={2} disabled={true}/>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u989c\u8272\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nrender() {\n  return (\n    <div>\n      <Rate value={2} color=\"#d80000\"/> <br/>\n      <Rate value={3.5} allowHalf={true} color=\"#16a900\"/>\n    </div>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u6587\u672c\u5c55\u73b0\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props){\n  super(props);\n  this.state={\n    value:0,\n    hoverValue:0,\n  };\n}\nhandleChange(e,value){\n  this.setState({ value });\n}\nrender() {\n  const { value,hoverValue } = this.state;\n  let str = '\u6781\u5dee';\n  let _value = hoverValue>0 ? hoverValue :value;\n  switch(_value){\n    case 0:str='\u6ca1\u6709\u72b6\u6001';break;\n    case 1:str='\u6781\u5dee';break;\n    case 2:str='\u5931\u671b';break;\n    case 3:str='\u4e00\u822c';break;\n    case 4:str='\u6ee1\u610f';break;\n    case 5:str='\u60ca\u559c';break;\n  }\n  return (\n    <span>\n      <Rate onChange={this.handleChange.bind(this)} value={value} onHoverChange={(e,v)=>this.setState({hoverValue:v})} />\n      {value >-1&& <span> {str} </span>}\n      {hoverValue >-1&& <span>, hover {hoverValue} stars</span>}\n    </span>\n  );\n}\n```\n\x3c!--End--\x3e\n\n\n### \u5141\u8bb8\u534a\u9009\n\n\u53ef\u652f\u6301\u9f20\u6807\u9009\u62e9\u534a\u661f\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nrender() {\n  return <Rate value={2.5} allowHalf={true} onChange={(e,val) => console.log(val)} />\n}\n```\n\x3c!--End--\x3e\n\n\n\n## API\n\n### Rate\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | Number | - |\n| count | star \u603b\u6570 | Number | `5` |\n| disabled | \u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u4ea4\u4e92 | Boolean | `false` |\n| allowHalf | \u662f\u5426\u5141\u8bb8\u534a\u9009 | Boolean | `false` |\n| character | \u81ea\u5b9a\u4e49\u5b57\u7b26 | ReactNode | - |\n| color | \u81ea\u5b9a\u4e49Star\u7684\u989c\u8272 | String | - |\n| className | \u81ea\u5b9a\u4e49\u6837\u5f0f\u7c7b\u540d | String | - |\n| onChange | \u6570\u503c\u6539\u53d8\u65f6\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u5f53\u524d\u503c | Funtcion(e:Even,value) | - |\n| onHoverChange | \u9f20\u6807\u7ecf\u8fc7\u65f6\u6570\u503c\u53d8\u5316\u7684\u56de\u8c03 | Funtcion(e:Even,value) | - |"}});