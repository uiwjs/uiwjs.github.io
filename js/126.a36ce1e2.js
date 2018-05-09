(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ 645:
/***/ (function(module, exports) {

module.exports = "InputPassword 密码输入框\n===\n\n显示或隐藏输入的密码\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    }\n  }\n  onChange(e,value) {\n    console.log(`value - ${value}`)\n    this.setState({value:value})\n  }\n  render() {\n    const {Row,Col} = Layout;\n    return (\n      <Row>\n        <Col xs=\"8\" sm=\"8\" md=\"8\" xs=\"24\">\n          <InputPassword \n            value={this.state.value} \n            placeholder=\"请输入密码\" \n            onChange={this.onChange.bind(this)} \n            length={6}\n          />\n        </Col>\n      </Row>\n    )\n  }\n}\n```\n<!--End-->\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { InputPassword } from 'uiw';\n// or\nimport InputPassword from 'uiw/lib/input-password';\n```\n\n### InputPassword\n\n继承[Input](/#/cn/input)参数，例如`icon`、`length`\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| icon | 输入框`后`面放置图标 | String | `eye-o` |\n"

/***/ })

}]);