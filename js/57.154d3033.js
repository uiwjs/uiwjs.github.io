(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ 531:
/***/ (function(module, exports) {

module.exports = "Breadcrumb 面包屑\n===\n\n显示当前页面的路径，快速返回之前的任意页面。\n\n### 基础用法\n\n适用广泛的基础用法。\n\n<!--DemoStart--> \n\n在 `Breadcrumb` 中使用 `Breadcrumb.Item` 标签表示从首页开始的每一级。\n\n```js\nrender() {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item>首页</Breadcrumb.Item>\n      <Breadcrumb.Item>活动管理</Breadcrumb.Item>\n      <Breadcrumb.Item>活动列表</Breadcrumb.Item>\n      <Breadcrumb.Item>活动详情</Breadcrumb.Item>\n    </Breadcrumb>\n  )\n}\n```\n<!--End-->\n\n### 自定义分隔符\n\n使用 `separator=\">\"` 可以自定义分隔符，分隔符也可以是图标。\n\n<!--DemoStart--> \n注意：子组件也可以定义`separator=\"/\"` 参数哦\n```js\nrender() {\n  return (\n    <div>\n\n        <Breadcrumb separator=\">\">\n          <Breadcrumb.Item>首页</Breadcrumb.Item>\n          <Breadcrumb.Item>活动管理</Breadcrumb.Item>\n          <Breadcrumb.Item>活动列表</Breadcrumb.Item>\n          <Breadcrumb.Item>活动详情</Breadcrumb.Item>\n        </Breadcrumb>\n\n        <Breadcrumb separator={<Icon type=\"menu\"/>}>\n          <Breadcrumb.Item>首页</Breadcrumb.Item>\n          <Breadcrumb.Item separator=\"/\">活动管理</Breadcrumb.Item>\n          <Breadcrumb.Item>活动列表</Breadcrumb.Item>\n          <Breadcrumb.Item>活动详情</Breadcrumb.Item>\n        </Breadcrumb>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 带有图标和连接的\n\n图标放在文字前面。注意文字要使用`span`包裹起来，图标 `<Icon/>` 需要跟`span`同级。`Breadcrumb.Item` 定义 `href` 参数的话，`Item` 上的参数就全部是超链原始属性。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n      <Breadcrumb separator=\">\">\n        <Breadcrumb.Item><Icon type=\"menu\"/></Breadcrumb.Item>\n        <Breadcrumb.Item href=\"https://github.com/jaywcjlove\" target=\"_blank\">\n          <Icon type=\"verification\"/><span>活动管理</span>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item separator=\"/\">\n            <a href=\"/\">活动列表</a>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item>活动详情</Breadcrumb.Item>\n      </Breadcrumb>\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n## API\n\n### Breadcrumb\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| separator | 分隔符自定义 | String、ReactNode | `/` |\n\n### Breadcrumb.Item\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| separator | 分隔符自定义，子组件可以单独定义不同的分隔符。 | String、ReactNode | `/` |\n| href | 定义超链接， 定义了 `href` 参数，`Item` 上的参数就全部是超链原始属性。 | String、ReactNode | `/` |"

/***/ })

}]);