"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[190],{190:function(e,n,t){t.r(n),n.default={components:{20:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(968);return function(){return n.default.createElement("div",{style:{display:"flex"}},n.default.createElement(r.Carousel,null,n.default.createElement("div",{style:{height:"100%",background:"#1EABCD"}},n.default.createElement("span",null,"1")),n.default.createElement("div",{style:{height:"100%",background:"#393b46"}},n.default.createElement("span",null,"2")),n.default.createElement("div",{style:{height:"100%",background:"#008EF0"}},n.default.createElement("span",null,"3")),n.default.createElement("div",{style:{height:"100%",background:"#393E48"}},n.default.createElement("span",null,"4"))),n.default.createElement("span",{style:{marginLeft:10}}),n.default.createElement(r.Carousel,{direction:"vertical"},n.default.createElement("div",{style:{height:"100%",background:"#1EABCD"}},n.default.createElement("span",null,"1")),n.default.createElement("div",{style:{height:"100%",background:"#393b46"}},n.default.createElement("span",null,"2")),n.default.createElement("div",{style:{height:"100%",background:"#008EF0"}},n.default.createElement("span",null,"3")),n.default.createElement("div",{style:{height:"100%",background:"#393E48"}},n.default.createElement("span",null,"4"))))}}(),67:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(968);return function(){return n.default.createElement(r.Carousel,{palyTime:1e3,scrollTime:500},n.default.createElement("div",{style:{height:"100%",background:"#1EABCD"}},n.default.createElement("span",null,"1")),n.default.createElement("div",{style:{height:"100%",background:"#393b46"}},n.default.createElement("span",null,"2")),n.default.createElement("div",{style:{height:"100%",background:"#008EF0"}},n.default.createElement("span",null,"3")),n.default.createElement("div",{style:{height:"100%",background:"#393E48"}},n.default.createElement("span",null,"4")))}}(),97:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},r=t(968);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,l=[],u=!0,o=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);u=!0);}catch(i){o=!0,a=i}finally{try{u||null==t.return||t.return()}finally{if(o)throw a}}return l}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}return function(){var e=n.default.useRef(),t=a(n.default.useState(!0),2),l=t[0],u=t[1];return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.Carousel,{ref:e,position:2,autoPlay:l,afterChange:function(e){return console.log("after",e)},beforeChange:function(e){return console.log("before",e)}},n.default.createElement("div",{style:{height:"100%",background:"#1EABCD"}},n.default.createElement("span",null,"1")),n.default.createElement("div",{style:{height:"100%",background:"#393b46"}},n.default.createElement("span",null,"2")),n.default.createElement("div",{style:{height:"100%",background:"#008EF0"}},n.default.createElement("span",null,"3")),n.default.createElement("div",{style:{height:"100%",background:"#393E48"}},n.default.createElement("span",null,"4"))),n.default.createElement("button",{onClick:function(){return e.current.gotoSlide(1)}},"\u8df3\u8f6c"),n.default.createElement("button",{onClick:function(){return e.current.prevSlide()}},"\u4e0a\u4e00\u5f20"),n.default.createElement("button",{onClick:function(){return e.current.nextSlide()}},"\u4e0b\u4e00\u5f20"),n.default.createElement("button",{onClick:function(){return u(!l)}},l?"\u6682\u505c":"\u5f00\u59cb"))}}()},data:{20:{name:20,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      display: \'flex\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Carousel, null, /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#1EABCD\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "1")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393b46\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "2")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#008EF0\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "3")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393E48\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "4"))), /*#__PURE__*/_react["default"].createElement("span", {\n    style: {\n      marginLeft: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Carousel, {\n    direction: "vertical"\n  }, /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#1EABCD\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "1")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393b46\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "2")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#008EF0\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "3")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393E48\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "4"))));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <div style={{ display:'flex' }}>\n      <Carousel>\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n      <span style={{marginLeft:10}}/>\n      <Carousel direction=\"vertical\" >\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n    </div>\n  );\n}\n\nexport default Demo"},67:{name:67,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Carousel, {\n    palyTime: 1000,\n    scrollTime: 500\n  }, /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#1EABCD\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "1")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393b46\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "2")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#008EF0\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "3")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393E48\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "4")));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <Carousel palyTime={1000} scrollTime={500}>\n      <div style={{ height: '100%', background: '#1EABCD' }}>\n        <span>1</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393b46' }}>\n        <span>2</span>\n      </div>\n      <div style={{ height: '100%',  background: '#008EF0' }}>\n        <span>3</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393E48' }}>\n        <span>4</span>\n      </div>\n    </Carousel>\n  );\n}\n\nexport default Demo"},97:{name:97,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Demo() {\n  var ref = _react["default"].useRef();\n\n  var _React$useState = _react["default"].useState(true),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      autoPlay = _React$useState2[0],\n      autoPlaySet = _React$useState2[1];\n\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_uiw.Carousel, {\n    ref: ref,\n    position: 2,\n    autoPlay: autoPlay,\n    afterChange: function afterChange(current) {\n      return console.log(\'after\', current);\n    },\n    beforeChange: function beforeChange(current) {\n      return console.log(\'before\', current);\n    }\n  }, /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#1EABCD\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "1")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393b46\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "2")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#008EF0\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "3")), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      height: \'100%\',\n      background: \'#393E48\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement("span", null, "4"))), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return ref.current.gotoSlide(1);\n    }\n  }, "\\u8DF3\\u8F6C"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return ref.current.prevSlide();\n    }\n  }, "\\u4E0A\\u4E00\\u5F20"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return ref.current.nextSlide();\n    }\n  }, "\\u4E0B\\u4E00\\u5F20"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return autoPlaySet(autoPlay ? false : true);\n    }\n  }, autoPlay ? \'\u6682\u505c\' : \'\u5f00\u59cb\'));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n\n  const ref=React.useRef()\n  const [autoPlay,autoPlaySet]=React.useState(true)\n\n  return (\n    <React.Fragment>\n      <Carousel\n        ref={ref}\n        position={2}\n        autoPlay={autoPlay}\n        afterChange={(current)=>console.log('after',current)}\n        beforeChange={(current)=>console.log('before',current)}\n      >\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n      <button onClick={() => ref.current.gotoSlide(1)}>\u8df3\u8f6c</button>\n      <button onClick={() => ref.current.prevSlide()}>\u4e0a\u4e00\u5f20</button>\n      <button onClick={() => ref.current.nextSlide()}>\u4e0b\u4e00\u5f20</button>\n      <button onClick={() =>autoPlaySet(autoPlay?false:true)}>{autoPlay?'\u6682\u505c':'\u5f00\u59cb'}</button>\n    </React.Fragment>\n  );\n}\n\nexport default Demo"}},source:"Carousel \u8d70\u9a6c\u706f\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-carousel/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-carousel.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-carousel)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-carousel.svg?label=@uiw/react-carousel)](https://npmjs.com/@uiw/react-carousel)\n\n\u6eda\u52a8\u64ad\u653e\u3002\u5728 v4.15.0+ \u6dfb\u52a0\u3002\n\n```jsx\nimport { Carousel } from 'uiw';\n// or\nimport Carousel from '@uiw/react-carousel';\n```\n\n## \u57fa\u7840\u7528\u6cd5\n\n\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <div style={{ display:'flex' }}>\n      <Carousel>\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n      <span style={{marginLeft:10}}/>\n      <Carousel direction=\"vertical\" >\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n    </div>\n  );\n}\n\nexport default Demo\n```\n\n## \u63a7\u5236\u64ad\u653e\u9891\u7387\n\npalyTime\u8bbe\u7f6e\u6bcf\u5e27\u505c\u7559\u65f6\u95f4\uff0cscrollTime\u8bbe\u7f6e\u5207\u6362\u5e27\u7684\u901f\u5ea6\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n  return (\n    <Carousel palyTime={1000} scrollTime={500}>\n      <div style={{ height: '100%', background: '#1EABCD' }}>\n        <span>1</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393b46' }}>\n        <span>2</span>\n      </div>\n      <div style={{ height: '100%',  background: '#008EF0' }}>\n        <span>3</span>\n      </div>\n      <div style={{ height: '100%',  background: '#393E48' }}>\n        <span>4</span>\n      </div>\n    </Carousel>\n  );\n}\n\nexport default Demo\n```\n\n## \u5207\u6362\u5230\u6307\u5b9a\u5e27\n\n\u624b\u52a8\u5207\u6362\u5230\u6307\u5b9a\u5e27\u7684\u4f4d\u7f6e\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Carousel } from 'uiw';\n\nfunction Demo() {\n\n  const ref=React.useRef()\n  const [autoPlay,autoPlaySet]=React.useState(true)\n\n  return (\n    <React.Fragment>\n      <Carousel\n        ref={ref}\n        position={2}\n        autoPlay={autoPlay}\n        afterChange={(current)=>console.log('after',current)}\n        beforeChange={(current)=>console.log('before',current)}\n      >\n        <div style={{ height: '100%', background: '#1EABCD' }}>\n          <span>1</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393b46' }}>\n          <span>2</span>\n        </div>\n        <div style={{ height: '100%',  background: '#008EF0' }}>\n          <span>3</span>\n        </div>\n        <div style={{ height: '100%',  background: '#393E48' }}>\n          <span>4</span>\n        </div>\n      </Carousel>\n      <button onClick={() => ref.current.gotoSlide(1)}>\u8df3\u8f6c</button>\n      <button onClick={() => ref.current.prevSlide()}>\u4e0a\u4e00\u5f20</button>\n      <button onClick={() => ref.current.nextSlide()}>\u4e0b\u4e00\u5f20</button>\n      <button onClick={() =>autoPlaySet(autoPlay?false:true)}>{autoPlay?'\u6682\u505c':'\u5f00\u59cb'}</button>\n    </React.Fragment>\n  );\n}\n\nexport default Demo\n```\n\n## Props\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| width | \u5bbd\u5ea6 | number | 400 |\n| height | \u9ad8\u5ea6 | number | 200 |\n| position | \u8bbe\u7f6e\u521d\u59cb\u5e27\u4f4d\u7f6e | number | 0 |\n| palyTime | \u6bcf\u5e27\u505c\u7559\u65f6\u95f4(ms) | number | 2000 |\n| scrollTime | \u6eda\u52a8\u52a8\u753b\u7684\u901f\u5ea6(ms) | number | 200 |\n| autoPlay | \u662f\u5426\u81ea\u52a8\u64ad\u653e | boolean | true |\n| afterChange | \u5207\u6362\u9762\u677f\u524d\u7684\u56de\u8c03 | (current) => void | - |\n| beforeChange | \u5207\u6362\u9762\u677f\u540e\u7684\u56de\u8c03 | (current) => void | - |\n| direction | \u6eda\u52a8\u65b9\u4f4d`horizontal`\u6a2a\u5411\uff0c`vertical`\u7ad6\u5411 | horizontal \\| vertical | horizontal |\n\n### ref\n\n```ts\n  // \u8df3\u8f6c\u5230\u6307\u5b9a\u5e27\n  gotoSlide: (slideNumber: number) => void;\n  // \u4e0a\u4e00\u9488\n  prevSlide: () => void;\n  // \u4e0b\u4e00\u5e27\n  nextSlide: () => void;\n  // \u6682\u505c\u64ad\u653e\n  stopPlay: () => void;\n```\n\n\n"}}}]);
//# sourceMappingURL=190.1c9e3d39.chunk.js.map