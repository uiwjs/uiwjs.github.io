"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6255],{6255:function(e,n,t){t.r(n),n.default={components:{18:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(8797);return function(){return n.default.createElement(u.Affix,{offsetTop:60},n.default.createElement(u.Button,{type:"primary"},"1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8"))}}(),34:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(8797);return function(){return n.default.createElement(u.Affix,{offsetBottom:10,onChange:function(e){console.log("affixed::",e)}},n.default.createElement(u.Button,{type:"primary",style:{marginLeft:20}},"2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8"))}}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Affix, {\n    offsetTop: 60\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "primary"\n  }, "1 \\u5F53\\u6309\\u94AE\\u8DDD\\u79BB\\u9876\\u90E8\\u8DDD\\u79BB\\u4E3A 0\\uFF0C\\u6309\\u94AE\\u88AB\\u9489\\u5728\\u9876\\u90E8"));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Affix, Button } from 'uiw';\n\nfunction Demo() {\n  return <Affix offsetTop={60}>\n    <Button type=\"primary\">1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8</Button>\n  </Affix>\n}\nexport default Demo"},34:{name:34,meta:{background:"#fff",codeSandbox:"true",codePen:"tru"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Affix, {\n    offsetBottom: 10,\n    onChange: function onChange(affixed) {\n      console.log(\'affixed::\', affixed);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n    type: "primary",\n    style: {\n      marginLeft: 20\n    }\n  }, "2 \\u5F53\\u6309\\u94AE\\u8DDD\\u79BB\\u5E95\\u90E8\\u8DDD\\u79BB\\u4E3A 0\\uFF0C\\u6309\\u94AE\\u88AB\\u9489\\u5728\\u5E95\\u90E8"));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Affix, Button } from 'uiw';\n\nfunction Demo() {\n  return   <Affix offsetBottom={10} onChange={(affixed) => {\n    console.log('affixed::', affixed);\n  }}>\n    <Button type=\"primary\" style={{ marginLeft: 20 }}>2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8</Button>\n  </Affix>\n}\nexport default Demo"}},source:"Affix \u56fe\u9489\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-affix/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-affix.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-affix)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-affix.svg?label=@uiw/react-affix)](https://npmjs.com/@uiw/react-affix)\n\n\u4f7f\u7528\u56fe\u9489\uff0c\u53ef\u4ee5\u5c06\u5185\u5bb9\u56fa\u5b9a\u5728\u5c4f\u5e55\u53ef\u89c6\u8303\u56f4\uff0c\u5e76\u4e14\u4e0d\u968f\u9875\u9762\u7684\u6eda\u52a8\u800c\u6eda\u52a8\uff0c\u5e38\u7528\u4e8e\u83dc\u5355\u7b49\u3002\n\n```jsx\nimport { Affix } from 'uiw';\n// or\nimport Affix from '@uiw/react-affix';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n \n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Affix, Button } from 'uiw';\n\nfunction Demo() {\n  return <Affix offsetTop={60}>\n    <Button type=\"primary\">1 \u5f53\u6309\u94ae\u8ddd\u79bb\u9876\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u9876\u90e8</Button>\n  </Affix>\n}\nexport default Demo\n```\n\n### \u9489\u5728\u5e95\u90e8\n\n\u8fd9\u4e2a\u5b9e\u4f8b\u9700\u8981\u4f60\u7f29\u5c0f\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5c31\u53ef\u4ee5\u6d4b\u8bd5\u770b\u6548\u679c\u5566\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=tru\nimport React from 'react';\nimport { Affix, Button } from 'uiw';\n\nfunction Demo() {\n  return   <Affix offsetBottom={10} onChange={(affixed) => {\n    console.log('affixed::', affixed);\n  }}>\n    <Button type=\"primary\" style={{ marginLeft: 20 }}>2 \u5f53\u6309\u94ae\u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e3a 0\uff0c\u6309\u94ae\u88ab\u9489\u5728\u5e95\u90e8</Button>\n  </Affix>\n}\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| offsetBottom | \t\u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1 | Number| - |\n| offsetTop | \t\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1 | Number| - |\n| onChange | \t\t\u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 | Function(affixed) | - |\n"}}}]);
//# sourceMappingURL=6255.9cd302e5.chunk.js.map