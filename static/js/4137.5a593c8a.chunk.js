"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4137],{4137:function(e,n,t){t.r(n),n.default={components:{18:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(2922);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,i=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(u)throw a}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}return function(){var e=a(n.default.useState({current:2,pageSize:10}),2),t=e[0],i=e[1];return n.default.createElement("div",null,n.default.createElement(r.Pagination,{current:t.current,pageSize:t.pageSize,total:30,divider:!0,pageSizeOptions:[5,10,20,30],onShowSizeChange:function(e,n){return i({current:e,pageSize:n})}}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:2,pageSize:10,total:38,divider:!0}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:1,pageSize:5,total:249,pageSizeOptions:[5,10,20,30]}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:1,alignment:"center",pageSize:10,total:50}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:1,pageSize:10,total:60,divider:!0}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:1,pageSize:10,total:70,divider:!0}))}}(),60:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(2922);return function(){return n.default.createElement("div",null,n.default.createElement(r.Pagination,{size:"small",current:1,pageSize:5,pageSizeOptions:[5,10,20,30],total:249}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{size:"small",current:1,pageSize:10,total:50}))}}(),78:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(2922);return function(){return n.default.createElement("div",null,n.default.createElement(r.Pagination,{current:5,total:250,onChange:function(e){console.log("pageNumber:".concat(e))}}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:1,alignment:"center",total:250,onChange:function(e){console.log("pageNumber:".concat(e))}}),n.default.createElement(r.Divider,null),n.default.createElement(r.Pagination,{current:25,alignment:"right",total:250,onChange:function(e){console.log("pageNumber:".concat(e))}}))}}()},data:{18:{name:18,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar Demo = function Demo() {\n  var _React$useState = _react["default"].useState({\n    current: 2,\n    pageSize: 10\n  }),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      pageObj = _React$useState2[0],\n      setPageObj = _React$useState2[1];\n\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: pageObj.current,\n    pageSize: pageObj.pageSize,\n    total: 30,\n    divider: true,\n    pageSizeOptions: [5, 10, 20, 30],\n    onShowSizeChange: function onShowSizeChange(current, pageSize) {\n      return setPageObj({\n        current: current,\n        pageSize: pageSize\n      });\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 2,\n    pageSize: 10,\n    total: 38,\n    divider: true\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 1,\n    pageSize: 5,\n    total: 249,\n    pageSizeOptions: [5, 10, 20, 30]\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 1,\n    alignment: "center",\n    pageSize: 10,\n    total: 50\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 1,\n    pageSize: 10,\n    total: 60,\n    divider: true\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 1,\n    pageSize: 10,\n    total: 70,\n    divider: true\n  }));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\n\nconst Demo = () => {\n  const [pageObj, setPageObj] = React.useState({\n    current: 2,\n    pageSize: 10\n  });\n  return (\n    <div>\n      <Pagination\n        current={pageObj.current}\n        pageSize={pageObj.pageSize}\n        total={30}\n        divider\n        pageSizeOptions={[5, 10, 20, 30]}\n        onShowSizeChange={(current, pageSize) => setPageObj({\n          current: current,\n          pageSize: pageSize\n        })}\n      />\n      <Divider />\n      <Pagination current={2} pageSize={10} total={38} divider />\n      <Divider />\n      <Pagination current={1} pageSize={5} total={249} pageSizeOptions={[5, 10, 20, 30]} />\n      <Divider />\n      <Pagination current={1} alignment=\"center\" pageSize={10} total={50} />\n      <Divider />\n      <Pagination current={1} pageSize={10} total={60} divider />\n      <Divider />\n      <Pagination current={1} pageSize={10} total={70} divider />\n    </div>\n  )\n}\n\nexport default Demo"},60:{name:60,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    size: "small",\n    current: 1,\n    pageSize: 5,\n    pageSizeOptions: [5, 10, 20, 30],\n    total: 249\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    size: "small",\n    current: 1,\n    pageSize: 10,\n    total: 50\n  }));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Pagination size=\"small\" current={1} pageSize={5} pageSizeOptions={[5, 10, 20, 30]} total={249} />\n    <Divider />\n    <Pagination size=\"small\" current={1} pageSize={10} total={50} />\n  </div>\n}\nexport default Demo"},78:{name:78,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 5,\n    total: 250,\n    onChange: function onChange(pageNumber) {\n      console.log("pageNumber:".concat(pageNumber));\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 1,\n    alignment: "center",\n    total: 250,\n    onChange: function onChange(pageNumber) {\n      console.log("pageNumber:".concat(pageNumber));\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Pagination, {\n    current: 25,\n    alignment: "right",\n    total: 250,\n    onChange: function onChange(pageNumber) {\n      console.log("pageNumber:".concat(pageNumber));\n    }\n  }));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Pagination\n      current={5}\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={1}\n      alignment=\"center\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={25}\n      alignment=\"right\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n  </div>\n}\n\nexport default Demo"}},source:"Pagination \u5206\u9875\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-pagination/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-pagination.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-pagination)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-pagination.svg?label=@uiw/react-pagination)](https://npmjs.com/@uiw/react-pagination)\n\n\u5f53\u6570\u636e\u91cf\u8f83\u591a\u65f6\uff0c\u4f7f\u7528\u5206\u9875\u53ef\u4ee5\u5feb\u901f\u8fdb\u884c\u6570\u636e\u5207\u6362\uff0c\u6bcf\u6b21\u53ea\u52a0\u8f7d\u4e00\u4e2a\u9875\u9762\u3002\n\n```jsx\nimport { Pagination } from 'uiw';\n// or\nimport Pagination from '@uiw/react-pagination';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\n\nconst Demo = () => {\n  const [pageObj, setPageObj] = React.useState({\n    current: 2,\n    pageSize: 10\n  });\n  return (\n    <div>\n      <Pagination\n        current={pageObj.current}\n        pageSize={pageObj.pageSize}\n        total={30}\n        divider\n        pageSizeOptions={[5, 10, 20, 30]}\n        onShowSizeChange={(current, pageSize) => setPageObj({\n          current: current,\n          pageSize: pageSize\n        })}\n      />\n      <Divider />\n      <Pagination current={2} pageSize={10} total={38} divider />\n      <Divider />\n      <Pagination current={1} pageSize={5} total={249} pageSizeOptions={[5, 10, 20, 30]} />\n      <Divider />\n      <Pagination current={1} alignment=\"center\" pageSize={10} total={50} />\n      <Divider />\n      <Pagination current={1} pageSize={10} total={60} divider />\n      <Divider />\n      <Pagination current={1} pageSize={10} total={70} divider />\n    </div>\n  )\n}\n\nexport default Demo\n```\n\n### \u8ff7\u4f60\u5206\u9875\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Pagination size=\"small\" current={1} pageSize={5} pageSizeOptions={[5, 10, 20, 30]} total={249} />\n    <Divider />\n    <Pagination size=\"small\" current={1} pageSize={10} total={50} />\n  </div>\n}\nexport default Demo\n```\n\n### \u5bf9\u9f50\n\n\u76ee\u524d\u6709\u4e09\u79cd\u5bf9\u9f50\u65b9\u5f0f `\u5de6\u8fb9(left)`\u3001`\u4e2d\u95f4(center)`\u3001`\u53f3\u8fb9(right)`\u3002\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Pagination, Divider } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Pagination\n      current={5}\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={1}\n      alignment=\"center\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={25}\n      alignment=\"right\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n  </div>\n}\n\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| current | \u5f53\u524d\u9875\u6570\uff0c\u9009\u4e2d\u7684\u9875\u6570 | Number | 1 |\n| total | \u6570\u636e\u603b\u6570 | Number | 0 |\n| pageSize | \u6bcf\u9875\u6761\u6570 | Number | 10 |\n| pageSizeOptions | \u6307\u5b9a\u6bcf\u9875\u53ef\u4ee5\u663e\u793a\u591a\u5c11\u6761 | Number[] | - |\n| divider | \u9875\u7801\u4e4b\u95f4\u662f\u5426\u95f4\u9694 | Boolean | - |\n| size | \u5f53\u4e3a `small` \u65f6\uff0c\u662f\u5c0f\u5c3a\u5bf8\u5206\u9875 | Enum{`small`, `default`} | - |\n| alignment | \u5bf9\u9f50 | Enum{`left`, `center`, `right`} | `left` |\n| onChange | \u9875\u7801\u6539\u53d8\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u6539\u53d8\u540e\u7684\u9875\u7801 | Function(current, total, pageSize) | - |\n| onShowSizeChange | pageSize \u53d8\u5316\u7684\u56de\u8c03 | Function(current, pageSize) | - |"}}}]);
//# sourceMappingURL=4137.5a593c8a.chunk.js.map