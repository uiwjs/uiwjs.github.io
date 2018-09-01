(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 483:
/***/ (function(module, exports) {

module.exports = "Capsule 胶囊\n===\n\n胶囊。\n\n## 基础用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Capsule title=\"折扣\">限购一份</Capsule>\n        <Capsule color=\"red\" title=\"折扣\">限购一份</Capsule>\n        <Capsule type=\"shields\" title=\"npm\">v6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#ce4a32\" title=\"build\">failure</Capsule>\n        <Capsule type=\"shields\" color=\"#40bf16\" title=\"download\">10k</Capsule>\n        <Capsule type=\"shields\" color=\"#e97437\" title=\"coverage\">35%</Capsule>\n        <Capsule disabled title=\"build\">unknown</Capsule>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 颜色设置\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Capsule color=\"red\" title=\"折扣\">限购一份</Capsule>\n        <Capsule color=\"#1C7CEB\" title=\"折扣\">限购一份</Capsule>\n        <Capsule disabled color=\"#1C7CEB\" title=\"折扣\">限购一份</Capsule>\n        <Capsule color=\"#40ba16\" title=\"build\">passing</Capsule>\n        <Capsule color=\"#4f4f4f\" title=\"npm\">6.0.1</Capsule>\n        <Capsule color=\"#1C7CEB\" title=\"npm\">6.0.1</Capsule>\n        <Capsule color=\"#e97437\" title=\"coverage\">35%</Capsule>\n        <Capsule color=\"red\" title=\"build\">failure</Capsule>\n        <Capsule disabled color=\"red\" title=\"build\">unknown</Capsule>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 胶囊盾牌\n\n设置类型 `type` 值 `shields`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Capsule type=\"shields\" color=\"red\" title=\"折扣\">限购一份</Capsule>\n        <Capsule type=\"shields\" color=\"#1C7CEB\" title=\"折扣\">限购一份</Capsule>\n        <Capsule type=\"shields\" disabled color=\"#1C7CEB\" title=\"折扣\">限购一份</Capsule>\n        <Capsule type=\"shields\" color=\"#40ba16\" title=\"build\">passing</Capsule>\n        <Capsule type=\"shields\" color=\"#ea7538\" title=\"npm\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#cfa720\" title=\"npm\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#1C7CEB\" title=\"npm\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#e97437\" title=\"coverage\">35%</Capsule>\n        <Capsule type=\"shields\" color=\"red\" title=\"build\">failure</Capsule>\n        <Capsule type=\"shields\" disabled color=\"red\" title=\"build\">unknown</Capsule>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 作为标签使用\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Capsule type=\"shields\" color=\"red\">限购一份</Capsule>\n        <Capsule type=\"shields\" color=\"#1C7CEB\">限购一份</Capsule>\n        <Capsule type=\"shields\" disabled color=\"#1C7CEB\">限购一份</Capsule>\n        <Capsule type=\"shields\" color=\"#40ba16\">passing</Capsule>\n        <Capsule type=\"shields\" color=\"#ea7538\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#cfa720\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#1C7CEB\">6.0.1</Capsule>\n        <Capsule type=\"shields\" color=\"#e97437\">35%</Capsule>\n        <Capsule type=\"shields\" color=\"red\">failure</Capsule>\n        <Capsule type=\"shields\" disabled color=\"red\">unknown</Capsule>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## API\n\n### Capsule\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 胶囊标题 | String/ReactNode | - |\n| type | 胶囊类型 'shields', 'default' | String | - |\n| color | 胶囊颜色 | String | `#1C7CEB` |\n| disabled | 胶囊禁用 | Boolean | `false` |\n"

/***/ })

}]);