(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ 558:
/***/ (function(module, exports) {

module.exports = "Paging 分页\n===\n\n当数据量较多时，使用分页可以快速进行数据切换，每次只加载一个页面。\n\n### 基本用法\n\n基础分页。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n      <Paging activePage={5} total={250} onChange={(pageNumber)=>{\n        console.log('Page: ', pageNumber);\n        }}/>\n        <br />\n      <Paging total={60} onChange={(pageNumber)=>{\n        console.log('Page: ', pageNumber);\n      }}/>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 只有一页\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <Paging activePage={1} total={5} onChange={(pageNumber) => { \n      console.log(`pageNumber:${pageNumber}`)\n    }} />\n  )\n}\n```\n<!--End-->\n\n### 迷你分页\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <Paging size=\"small\" activePage={1} total={250} onChange={(pageNumber) => { \n      console.log(`pageNumber:${pageNumber}`)\n    }} />\n  )\n}\n```\n<!--End-->\n\n### 对齐\n\n目前有三种对齐方式 `左边(left)`、`中间(center)`、`右边(right)`\n\n<!--DemoStart--> \n```js\nrender() {\n  let cls = {padding: \"10px 10px\",background: \"#f5f5f5\",marginBottom:20}\n  let clsLast = {padding: \"10px 10px\",background: \"#f5f5f5\",marginBottom:0}\n  return (\n    <div>\n      <div style={cls}>\n        <Paging activePage={5} total={250} onChange={(pageNumber) => { \n          console.log(`pageNumber:${pageNumber}`)\n        }} />\n      </div>\n      <div style={cls}>\n        <Paging alignment=\"center\" activePage={5} total={250}  onChange={(pageNumber) => { \n          console.log(`pageNumber:${pageNumber}`)\n        }} />\n      </div>\n      <div style={clsLast}>\n        <Paging alignment=\"right\" activePage={5} total={250}  onChange={(pageNumber) => { \n          console.log(`pageNumber:${pageNumber}`)\n        }} />\n      </div>\n    </div>\n  )\n}\n```\n<!--End-->\n\n## API\n\n### Paging Attributes\n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| total | 数据总数 | Number | 0 |\n| size | 当为`small`时，是小尺寸分页 | String | - |\n| alignment | 对齐 | Enum{`left`, `center`, `right`} | `left` |\n| activePage | 当前页数，选中的页数 | Number | 1 |\n| pageSize | 每页条数 | Number | 10 |\n| onChange | 页码改变的回调，返回改变后的页码 | Function(activePage,total,pageSize) | - |"

/***/ })

}]);