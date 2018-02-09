webpackJsonp([15],{868:function(n,e){n.exports="Radio \u5355\u9009\u6846\n===\n\n\u5355\u9009\u6846\uff0c\u5728\u4e00\u7ec4\u5907\u9009\u9879\u4e2d\u8fdb\u884c\u5355\u9009\u3002\n\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u9002\u7528\u5e7f\u6cdb\u7684\u57fa\u7840\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nrender() {\n  return (\n    <Radio onChange={(e,value)=>{\n        console.log(`values= ${value}`,value)\n    }}>Radio\n    </Radio>\n  )\n}\n```\n\x3c!--End--\x3e\n\n### \u591a\u4e2a\u5355\u9009\u6846\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <div>\n      <Radio value={1} checked={this.state.value === 1} onChange={this.onChange.bind(this)}>\u5907\u9009\u9879</Radio>\n      <Radio value={2} checked={this.state.value === 2} onChange={this.onChange.bind(this)}>\u5907\u9009\u9879</Radio>\n    </div>\n  )\n}\n```\n\x3c!--End--\x3e\n\n### \u5355\u9009\u6846\u7981\u7528\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <div>\n        <Radio disabled={true}>\u7981\u7528</Radio>\n        <Radio disabled={true} checked={true}>\u7981\u7528</Radio>\n    </div>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u5355\u9009\u6846\u7ec4\n\n\u7ed3\u5408`Radio.Group`\u5143\u7d20\u548c\u5b50\u5143\u7d20`Radio`\u53ef\u4ee5\u5b9e\u73b0\u5355\u9009\u7ec4\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio value=\"3\">\u5907\u9009\u9879</Radio>\n      <Radio disabled={true} value=\"6\">\u5907\u9009\u9879</Radio>\n      <Radio value=\"9\">\u5907\u9009\u9879</Radio>\n    </Radio.Group>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u5355\u9009\u6846\u7ec4\u914d\u7f6e\u65b9\u5f0f\n\n\u901a\u8fc7\u914d\u7f6e `options` \u53c2\u6570\u6765\u6e32\u67d3\u5355\u9009\u6846\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value1: \"\u4e54\u5e03\u65af\",\n    value2: \"\u4e54\u7eb3\u68ee\",\n    value3: \"\u6bd4\u5c14\u76d6\u8328\"\n  }\n}\nonChange(key,e ,value) {\n  this.setState({\n    [key]: value\n  });\n}\nrender() {\n  const plainOptions = ['\u4e54\u5e03\u65af', '\u6bd4\u5c14\u76d6\u8328', '\u4e54\u7eb3\u68ee'];\n  const options = [\n    {label: '\u4e54\u5e03\u65af', value: '\u4e54\u5e03\u65af' },\n    {label: '\u6bd4\u5c14\u76d6\u8328', value: '\u6bd4\u5c14\u76d6\u8328' },\n    {label: '\u4e54\u7eb3\u68ee', value: '\u4e54\u7eb3\u68ee' },\n  ];\n  const optionsDisabled = [\n    {label: '\u4e54\u5e03\u65af', value: '\u4e54\u5e03\u65af' },\n    {label: '\u6bd4\u5c14\u76d6\u8328', value: '\u6bd4\u5c14\u76d6\u8328' },\n    {label: '\u4e54\u7eb3\u68ee', value: '\u4e54\u7eb3\u68ee' ,disabled: true },\n  ];\n  return (\n    <div>\n      <Radio.Group options={plainOptions} value={this.state.value1} \n        onChange={this.onChange.bind(this,'value1')} />\n      \n      <br/><br/>\n      \n      <Radio.Group options={options} value={this.state.value2} \n        onChange={this.onChange.bind(this,'value2')} />\n      \n      <br/><br/>\n\n      <Radio.Group options={optionsDisabled} value={this.state.value3} \n        onChange={this.onChange.bind(this,'value3')} />\n        \n    </div>\n  )\n}\n```\n\x3c!--End--\x3e\n\n### \u5355\u9009\u6846\u7ec4\u7ad6\u6392\n\n\u7ed3\u5408`Radio.Group`\u5143\u7d20\u548c\u5b50\u5143\u7d20`Radio`\u53ef\u4ee5\u5b9e\u73b0\u5355\u9009\u7ec4\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  const radioStyle = {\n    display: 'block',\n    height: '30px',\n    lineHeight: '30px',\n    marginLeft:0\n  };\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio style={radioStyle} value=\"3\">\u5907\u9009\u9879</Radio>\n      <Radio style={radioStyle} value=\"6\">\u5907\u9009\u9879</Radio>\n      <Radio style={radioStyle} value=\"9\">\u9009\u62e9\u663e\u793a\u8f93\u5165\u6846\u54e6\n        {this.state.value === \"9\" ? <Input style={{ \n          width: 100, \n          marginLeft: 10,\n          display: \"inline-block\"}} /> : null}\n      </Radio>\n    </Radio.Group>\n  )\n}\n```\n\x3c!--End--\x3e\n\n### \u6309\u94ae\u6837\u5f0f\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio.Button value=\"3\">\u5907\u9009\u9879</Radio.Button>\n      <Radio.Button disabled={true} value=\"6\">\u5907\u9009\u9879</Radio.Button>\n      <Radio.Button value=\"9\">\u5907\u9009\u9879</Radio.Button>\n    </Radio.Group>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n## API\n\n### Radio\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | String/Number/Boolean | - |\n| checked | Radio\u662f\u5426\u88ab\u9009\u4e2d | Boolean | - |\n| disabled | \u662f\u5426\u7981\u7528 | Boolean | `false` |\n| onChange | \u6570\u503c\u6539\u53d8\u65f6\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u5f53\u524d\u503c | Funtcion(e:Even,value) | - |\n\n### Radio.Group \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | String/Number/Boolean | - |\n| onChange | \u6570\u503c\u6539\u53d8\u65f6\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u5f53\u524d\u503c | Funtcion(e:Even,value) | - |\n| options | \u4ee5\u914d\u7f6e\u5f62\u5f0f\u8bbe\u7f6e\u5b50\u5143\u7d20 | Array<{label:String, value:String}> | - |\n\n### Radio.Group options\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| label | Radio\u663e\u793a\u6587\u5b57 | String/Number/Boolean | - |\n| value | Radio \u7684 value | String/Number | - |\n| disabled | Radio \u662f\u5426\u7981\u7528 | Boolean | - |"}});