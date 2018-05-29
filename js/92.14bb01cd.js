(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ 614:
/***/ (function(module, exports) {

module.exports = "Card 卡片\n===\n\n通用卡片容器，将信息聚合在卡片容器中展示，用来显示文字、列表、图文等内容。\n\n\n## 基础用法\n\n包含标题、内容、操作区域。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <Card title=\"Card标题\" extra={<a href=\"#\">更多</a>} style={{ width: 300 }}>\n      卡片内容<br/>\n      卡片内容<br/>\n      卡片内容<br/>\n    </Card>\n  )\n}\n```\n<!--End-->\n\n## 无边框\n\n在灰色背景上使用无边框的卡片。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div style={{ background: '#ECECEC', padding: '30px' }}>\n      <Card title=\"Card标题\" bordered={false} style={{ width: 300 }}>\n        卡片内容<br/>\n        卡片内容<br/>\n        卡片内容<br/>\n      </Card>\n    </div>\n  )\n}\n```\n<!--End-->\n\n## 简洁卡片\n\n只包含内容区域。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <Card style={{ width: 300 }}>\n      卡片内容<br/>\n      卡片内容<br/>\n      卡片内容<br/>\n    </Card>\n  )\n}\n```\n<!--End-->\n\n## 更灵活的内容展示\n\n可以调整默认边距，设定宽度。\n\n<!--DemoStart--> \n```js\nrender() {\n  let titleStyle = {padding: `10px 16px`}\n  return (\n    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>\n      <div>\n        <img alt=\"example\" width=\"100%\" src=\"http://7xi8d6.com1.z0.glb.clouddn.com/20171018091347_Z81Beh_nini.nicky_18_10_2017_9_13_35_727.jpeg\" />\n      </div>\n      <div style={titleStyle}>\n        <h3 style={{margin:0}}>我爱漂亮妹妹</h3>\n        <p style={{margin:0}}><a href=\"https://uiw-react.github.io\">https://uiw-react.github.io</a></p>\n      </div>\n    </Card>\n  )\n}\n```\n<!--End-->\n\n## 更灵活的内容展示\n\n跟栅格进行配合排版。\n\n<!--DemoStart--> \n```js\nrender() {\n  const {Row,Col} = Layout;\n  return (\n  <div style={{ background: '#ECECEC', padding: '20px 10px' }}>\n    <Row gutter={16}>\n      <Col span={8}>\n        <Card title=\"卡片标题\" bordered={false}>卡片内容！</Card>\n      </Col>\n      <Col span={8}>\n        <Card title=\"卡片标题\" bordered={false}>卡片内容！</Card>\n      </Col>\n      <Col span={8}>\n        <Card title=\"卡片标题\" bordered={false}>卡片内容！</Card>\n      </Col>\n    </Row>\n  </div>\n  )\n}\n```\n<!--End-->\n\n## API\n\n### Card\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 卡片标题 | String/ReactNode | - |\n| extra | 卡片右上角的操作区域 | String/ReactNode | - |\n| bordered | 是否显示边框 | Boolean | `true` |\n| noHover | 取消鼠标移过浮起 | Boolean | `false` |\n| bodyStyle | 设置 body 的样式 | Object | - |"

/***/ })

}]);