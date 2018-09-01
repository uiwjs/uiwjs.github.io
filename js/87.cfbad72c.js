(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ 561:
/***/ (function(module, exports) {

module.exports = "Radio 单选框\n===\n\n单选框，在一组备选项中进行单选。\n\n\n### 基础用法\n\n适用广泛的基础最简单的用法。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <Radio onChange={(e,value)=>{\n        console.log(`values= ${value}`,value)\n    }}>Radio\n    </Radio>\n  )\n}\n```\n<!--End-->\n\n### 多个单选框\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <div>\n      <Radio value={1} checked={this.state.value === 1} onChange={this.onChange.bind(this)}>备选项</Radio>\n      <Radio value={2} checked={this.state.value === 2} onChange={this.onChange.bind(this)}>备选项</Radio>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 单选框禁用\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <div>\n        <Radio disabled={true}>禁用</Radio>\n        <Radio disabled={true} checked={true}>禁用</Radio>\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 单选框组\n\n结合`Radio.Group`元素和子元素`Radio`可以实现单选组。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio value=\"3\">备选项</Radio>\n      <Radio disabled={true} value=\"6\">备选项</Radio>\n      <Radio value=\"9\">备选项</Radio>\n    </Radio.Group>\n  )\n}\n```\n<!--End-->\n\n\n### 单选框组配置方式\n\n通过配置 `options` 参数来渲染单选框。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value1: \"乔布斯\",\n    value2: \"乔纳森\",\n    value3: \"比尔盖茨\"\n  }\n}\nonChange(key,e ,value) {\n  this.setState({\n    [key]: value\n  });\n}\nrender() {\n  const plainOptions = ['乔布斯', '比尔盖茨', '乔纳森'];\n  const options = [\n    {label: '乔布斯', value: '乔布斯' },\n    {label: '比尔盖茨', value: '比尔盖茨' },\n    {label: '乔纳森', value: '乔纳森' },\n  ];\n  const optionsDisabled = [\n    {label: '乔布斯', value: '乔布斯' },\n    {label: '比尔盖茨', value: '比尔盖茨' },\n    {label: '乔纳森', value: '乔纳森' ,disabled: true },\n  ];\n  return (\n    <div>\n      <Radio.Group options={plainOptions} value={this.state.value1} \n        onChange={this.onChange.bind(this,'value1')} />\n      \n      <br/><br/>\n      \n      <Radio.Group options={options} value={this.state.value2} \n        onChange={this.onChange.bind(this,'value2')} />\n      \n      <br/><br/>\n\n      <Radio.Group options={optionsDisabled} value={this.state.value3} \n        onChange={this.onChange.bind(this,'value3')} />\n        \n    </div>\n  )\n}\n```\n<!--End-->\n\n### 单选框组竖排\n\n结合`Radio.Group`元素和子元素`Radio`可以实现单选组。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  const radioStyle = {\n    display: 'block',\n    height: '30px',\n    lineHeight: '30px',\n    marginLeft:0\n  };\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio style={radioStyle} value=\"3\">备选项</Radio>\n      <Radio style={radioStyle} value=\"6\">备选项</Radio>\n      <Radio style={radioStyle} value=\"9\">选择显示输入框哦\n        {this.state.value === \"9\" ? <Input style={{ \n          width: 100, \n          marginLeft: 10,\n          display: \"inline-block\"}} /> : null}\n      </Radio>\n    </Radio.Group>\n  )\n}\n```\n<!--End-->\n\n### 按钮样式\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 3\n  }\n}\nonChange(e,value) {\n  this.setState({ value });\n}\nrender() {\n  return (\n    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>\n      <Radio.Button value=\"3\">备选项</Radio.Button>\n      <Radio.Button disabled={true} value=\"6\">备选项</Radio.Button>\n      <Radio.Button value=\"9\">备选项</Radio.Button>\n    </Radio.Group>\n  )\n}\n```\n<!--End-->\n\n\n## API\n\n### Radio\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |\n| checked | Radio是否被选中 | Boolean | - |\n| disabled | 是否禁用 | Boolean | `false` |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |\n\n### Radio.Group \n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |\n| options | 以配置形式设置子元素 | Array<{label:String, value:String}> | - |\n\n### Radio.Group options\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| label | Radio显示文字 | String/Number/Boolean | - |\n| value | Radio 的 value | String/Number | - |\n| disabled | Radio 是否禁用 | Boolean | - |"

/***/ })

}]);