"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3055],{3055:function(e,n,l){l.r(n),n.default={components:{18:function(){var e,n=(e=l(8133))&&e.__esModule?e:{default:e},t=l(941);var r=[{label:"\u6e56\u5317\u7701",key:"0-0-0",children:[{label:"\u6b66\u6c49\u5e02",key:"0-1-0",children:[{label:"\u65b0\u6d32\u533a",key:"0-1-1",disabled:!0},{label:"\u6b66\u660c\u533a",key:"0-1-2"},{label:"\u6c49\u5357\u533a",key:"0-1-3",children:[{label:"\u6c49\u5357\u533a1",key:"0-1-3-1"},{label:"\u6c49\u5357\u533a2",key:"0-1-3-2"},{label:"\u6c49\u5357\u533a3",key:"0-1-3-3"}]}]},{label:"\u9ec4\u5188\u5e02",key:"0-2-0"},{label:"\u9ec4\u77f3\u5e02",key:"0-3-0",children:[{label:"\u9752\u5c71\u533a",key:"0-3-1"},{label:"\u9ec4\u9642\u533a",key:"0-3-2"},{label:"\u9752\u5c71\u533a",key:"0-3-3"}]}]},{label:"\u4e0a\u6d77\u5e02",key:"1-0-0",children:[{label:"\u9ec4\u6d66\u533a",key:"1-0-1"},{label:"\u5362\u6e7e\u533a",key:"1-0-2"},{label:"\u5f90\u6c47\u533a",key:"1-0-3",children:[{label:"\u534a\u6dde\u56ed\u8def\u8857\u9053",key:"1-1-0"},{label:"\u5357\u4eac\u4e1c\u8def\u8857\u9053",key:"1-2-0"},{label:"\u5916\u6ee9\u8857\u9053",key:"1-3-0"}]}]},{label:"\u5317\u4eac\u5e02",key:"2-0-0",children:[{label:"\u4e1c\u57ce\u533a",key:"2-1-0"},{label:"\u897f\u57ce\u533a",key:"2-2-0"},{label:"\u5d07\u6587\u533a",key:"2-3-0",children:[{label:"\u4e1c\u82b1\u5e02\u8857\u9053",key:"2-3-1"},{label:"\u4f53\u80b2\u9986\u8def\u8857\u9053",key:"2-3-2"},{label:"\u524d\u95e8\u8857\u9053",key:"2-3-3"}]}]},{label:"\u6fb3\u95e8",key:"3"}];return function(){return n.default.createElement(t.TreeChecked,{data:r,selectedKeys:["0-1-1"],onExpand:function(e,n,l,t){console.log(e,n,l,t)},onSelected:function(e,n,l,t){console.log("select:",e),console.log("select:",n),console.log("select:",l),console.log("select:",t)}})}}(),113:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n=function(n,l){if(!l&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var t=r(l);if(t&&t.has(n))return t.get(n);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if("default"!==c&&Object.prototype.hasOwnProperty.call(n,c)){var i=o?Object.getOwnPropertyDescriptor(n,c):null;i&&(i.get||i.set)?Object.defineProperty(a,c,i):a[c]=n[c]}a.default=n,t&&t.set(n,a);return a}(l(8133)),t=l(941);function r(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,l=new WeakMap;return(r=function(e){return e?l:n})(e)}var a=[{label:"\u6e56\u5317\u7701",key:"0-0-0",children:[{label:"\u6b66\u6c49\u5e02",key:"0-1-0",children:[{label:"\u65b0\u6d32\u533a",key:"0-1-1",disabled:!0},{label:"\u6b66\u660c\u533a",key:"0-1-2"},{label:"\u6c49\u5357\u533a",key:"0-1-3",children:[{label:"\u6c49\u5357\u533a1",key:"0-1-3-1"},{label:"\u6c49\u5357\u533a2",key:"0-1-3-2"},{label:"\u6c49\u5357\u533a3",key:"0-1-3-3"}]}]},{label:"\u9ec4\u5188\u5e02",key:"0-2-0"},{label:"\u9ec4\u77f3\u5e02",key:"0-3-0",children:[{label:"\u9752\u5c71\u533a",key:"0-3-1"},{label:"\u9ec4\u9642\u533a",key:"0-3-2"},{label:"\u9752\u5c71\u533a",key:"0-3-3"}]}]},{label:"\u6fb3\u95e8",key:"3"}];return function(){var e=(0,n.useRef)();return n.default.createElement("div",null,n.default.createElement(t.Form,{ref:e,onChange:function(e){var n=e.initial,l=e.current;console.log("onChange",n,l)},onSubmit:function(e){var n=e.initial;e.current.tree===n.tree?t.Notify.error({title:"\u63d0\u4ea4\u5931\u8d25\uff01",description:"\u8868\u5355\u63d0\u4ea4\u5185\u5bb9\u4e3a\u7a7a\uff01"}):t.Notify.success({title:"\u63d0\u4ea4\u6210\u529f\uff01"})},fields:{tree:{label:"\u6811",initialValue:["3"],children:n.default.createElement(t.TreeChecked,{data:a,selectedKeys:["0-2-0"]})}}},(function(e){var l=e.fields,r=(e.state,e.canSubmit);return n.default.createElement("div",null,n.default.createElement(t.Row,null,n.default.createElement(t.Col,{style:{maxWidth:300}},l.tree)),n.default.createElement(t.Row,null,n.default.createElement(t.Col,null,n.default.createElement(t.Button,{disabled:!r(),type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))})))}}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:"\"use strict\";\n\nvar _react = _interopRequireDefault(require(\"react\"));\n\nvar _uiw = require(\"uiw\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar data = [{\n  label: '\u6e56\u5317\u7701',\n  key: '0-0-0',\n  children: [{\n    label: '\u6b66\u6c49\u5e02',\n    key: '0-1-0',\n    children: [{\n      label: '\u65b0\u6d32\u533a',\n      key: '0-1-1',\n      disabled: true\n    }, {\n      label: '\u6b66\u660c\u533a',\n      key: '0-1-2'\n    }, {\n      label: '\u6c49\u5357\u533a',\n      key: '0-1-3',\n      children: [{\n        label: '\u6c49\u5357\u533a1',\n        key: '0-1-3-1'\n      }, {\n        label: '\u6c49\u5357\u533a2',\n        key: '0-1-3-2'\n      }, {\n        label: '\u6c49\u5357\u533a3',\n        key: '0-1-3-3'\n      }]\n    }]\n  }, {\n    label: '\u9ec4\u5188\u5e02',\n    key: '0-2-0'\n  }, {\n    label: '\u9ec4\u77f3\u5e02',\n    key: '0-3-0',\n    children: [{\n      label: '\u9752\u5c71\u533a',\n      key: '0-3-1'\n    }, {\n      label: '\u9ec4\u9642\u533a',\n      key: '0-3-2'\n    }, {\n      label: '\u9752\u5c71\u533a',\n      key: '0-3-3'\n    }]\n  }]\n}, {\n  label: '\u4e0a\u6d77\u5e02',\n  key: '1-0-0',\n  children: [{\n    label: '\u9ec4\u6d66\u533a',\n    key: '1-0-1'\n  }, {\n    label: '\u5362\u6e7e\u533a',\n    key: '1-0-2'\n  }, {\n    label: '\u5f90\u6c47\u533a',\n    key: '1-0-3',\n    children: [{\n      label: '\u534a\u6dde\u56ed\u8def\u8857\u9053',\n      key: '1-1-0'\n    }, {\n      label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053',\n      key: '1-2-0'\n    }, {\n      label: '\u5916\u6ee9\u8857\u9053',\n      key: '1-3-0'\n    }]\n  }]\n}, {\n  label: '\u5317\u4eac\u5e02',\n  key: '2-0-0',\n  children: [{\n    label: '\u4e1c\u57ce\u533a',\n    key: '2-1-0'\n  }, {\n    label: '\u897f\u57ce\u533a',\n    key: '2-2-0'\n  }, {\n    label: '\u5d07\u6587\u533a',\n    key: '2-3-0',\n    children: [{\n      label: '\u4e1c\u82b1\u5e02\u8857\u9053',\n      key: '2-3-1'\n    }, {\n      label: '\u4f53\u80b2\u9986\u8def\u8857\u9053',\n      key: '2-3-2'\n    }, {\n      label: '\u524d\u95e8\u8857\u9053',\n      key: '2-3-3'\n    }]\n  }]\n}, {\n  label: '\u6fb3\u95e8',\n  key: '3'\n}];\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react[\"default\"].createElement(_uiw.TreeChecked, {\n    data: data,\n    selectedKeys: ['0-1-1'],\n    onExpand: function onExpand(key, expanded, data, node) {\n      console.log(key, expanded, data, node);\n    },\n    onSelected: function onSelected(key, selected, item, evn) {\n      console.log('select:', key);\n      console.log('select:', selected);\n      console.log('select:', item);\n      console.log('select:', evn);\n    }\n  });\n};\n\nreturn Demo;",language:"jsx",value:"import React from 'react';\nimport { TreeChecked, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1', disabled: true },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nconst Demo = () => (\n  <TreeChecked\n    data={data}\n    selectedKeys={['0-1-1']}\n    onExpand={(key, expanded, data, node) => {\n      console.log(key, expanded, data, node);\n    }}\n    onSelected={(key, selected, item, evn) => {\n      console.log('select:', key);\n      console.log('select:', selected);\n      console.log('select:', item);\n      console.log('select:', evn);\n    }}\n  />\n)\nexport default Demo"},113:{name:113,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:"\"use strict\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireWildcard(require(\"react\"));\n\nvar _uiw = require(\"uiw\");\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar data = [{\n  label: '\u6e56\u5317\u7701',\n  key: '0-0-0',\n  children: [{\n    label: '\u6b66\u6c49\u5e02',\n    key: '0-1-0',\n    children: [{\n      label: '\u65b0\u6d32\u533a',\n      key: '0-1-1',\n      disabled: true\n    }, {\n      label: '\u6b66\u660c\u533a',\n      key: '0-1-2'\n    }, {\n      label: '\u6c49\u5357\u533a',\n      key: '0-1-3',\n      children: [{\n        label: '\u6c49\u5357\u533a1',\n        key: '0-1-3-1'\n      }, {\n        label: '\u6c49\u5357\u533a2',\n        key: '0-1-3-2'\n      }, {\n        label: '\u6c49\u5357\u533a3',\n        key: '0-1-3-3'\n      }]\n    }]\n  }, {\n    label: '\u9ec4\u5188\u5e02',\n    key: '0-2-0'\n  }, {\n    label: '\u9ec4\u77f3\u5e02',\n    key: '0-3-0',\n    children: [{\n      label: '\u9752\u5c71\u533a',\n      key: '0-3-1'\n    }, {\n      label: '\u9ec4\u9642\u533a',\n      key: '0-3-2'\n    }, {\n      label: '\u9752\u5c71\u533a',\n      key: '0-3-3'\n    }]\n  }]\n}, {\n  label: '\u6fb3\u95e8',\n  key: '3'\n}];\n\nfunction Demo() {\n  var form = (0, _react.useRef)();\n\n  var onSubmit = function onSubmit() {\n    form.current.onSubmit();\n  };\n\n  var resetForm = function resetForm() {\n    form.current.resetForm();\n  };\n\n  var getFieldValues = function getFieldValues() {\n    console.log('getFieldValues', form.current.getFieldValues());\n  };\n\n  var setFieldValue = function setFieldValue() {\n    form.current.setFieldValue('name', 'UIW');\n  };\n\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(_uiw.Form, {\n    ref: form,\n    onChange: function onChange(_ref) {\n      var initial = _ref.initial,\n          current = _ref.current;\n      console.log('onChange', initial, current);\n    },\n    onSubmit: function onSubmit(_ref2) {\n      var initial = _ref2.initial,\n          current = _ref2.current;\n\n      if (current.tree === initial.tree) {\n        _uiw.Notify.error({\n          title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n          description: \"\\u8868\\u5355\\u63D0\\u4EA4\\u5185\\u5BB9\\u4E3A\\u7A7A\\uFF01\"\n        });\n      } else {\n        _uiw.Notify.success({\n          title: '\u63d0\u4ea4\u6210\u529f\uff01'\n        });\n      }\n    },\n    fields: {\n      tree: {\n        label: \"\u6811\",\n        initialValue: ['3'],\n        children: /*#__PURE__*/_react[\"default\"].createElement(_uiw.TreeChecked, {\n          data: data,\n          selectedKeys: ['0-2-0']\n        })\n      }\n    }\n  }, function (_ref3) {\n    var fields = _ref3.fields,\n        state = _ref3.state,\n        canSubmit = _ref3.canSubmit;\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(_uiw.Row, null, /*#__PURE__*/_react[\"default\"].createElement(_uiw.Col, {\n      style: {\n        maxWidth: 300\n      }\n    }, fields.tree)), /*#__PURE__*/_react[\"default\"].createElement(_uiw.Row, null, /*#__PURE__*/_react[\"default\"].createElement(_uiw.Col, null, /*#__PURE__*/_react[\"default\"].createElement(_uiw.Button, {\n      disabled: !canSubmit(),\n      type: \"primary\",\n      htmlType: \"submit\"\n    }, \"\\u63D0\\u4EA4\"))));\n  }));\n}\n\nreturn Demo;",language:"jsx",value:"import React, { useState, useRef } from \"react\";\nimport { Form, Input, Row, Col, TreeChecked, Slider, Button, Notify } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1', disabled: true },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nfunction Demo() {\n  const form = useRef()\n\n  const onSubmit = () => {\n    form.current.onSubmit()\n  }\n  const resetForm = () => {\n    form.current.resetForm()\n  }\n  const getFieldValues = () => {\n    console.log('getFieldValues', form.current.getFieldValues())\n  }\n\n  const setFieldValue=()=>{\n    form.current.setFieldValue('name','UIW')\n  }\n\n  return (\n    <div>\n      <Form\n        ref={form}\n        onChange={({ initial, current }) => {\n          console.log('onChange', initial, current);\n        }}\n        onSubmit={({ initial, current }) => {\n          if (current.tree === initial.tree) {\n            Notify.error({\n              title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n              description: `\u8868\u5355\u63d0\u4ea4\u5185\u5bb9\u4e3a\u7a7a\uff01`,\n            });\n          } else {\n            Notify.success({\n              title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            });\n          }\n        }}\n        fields={{\n          tree: {\n            label: \"\u6811\",\n            initialValue: ['3'],\n            children: <TreeChecked\n              data={data}\n              selectedKeys={['0-2-0']}\n            />\n          }\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row>\n                <Col style={{ maxWidth: 300 }}>{fields.tree}</Col>\n              </Row>\n              <Row>\n                <Col>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  )\n}\nexport default Demo"}},source:"TreeChecked \u6811\u5f62\u9009\u62e9\u63a7\u4ef6\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-tree-checked/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-tree-checked.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-tree-checked)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-tree-checked.svg?label=@uiw/react-tree-checked)](https://npmjs.com/@uiw/react-tree-checked)\n\n\u4f7f\u7528\u6811\u9009\u62e9\u63a7\u4ef6\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u9009\u4e2d\u72b6\u6001\u3002\n\n```jsx\nimport { TreeChecked } from 'uiw';\n// or\nimport TreeChecked from '@uiw/react-tree-checked';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { TreeChecked, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1', disabled: true },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nconst Demo = () => (\n  <TreeChecked\n    data={data}\n    selectedKeys={['0-1-1']}\n    onExpand={(key, expanded, data, node) => {\n      console.log(key, expanded, data, node);\n    }}\n    onSelected={(key, selected, item, evn) => {\n      console.log('select:', key);\n      console.log('select:', selected);\n      console.log('select:', item);\n      console.log('select:', evn);\n    }}\n  />\n)\nexport default Demo\n```\n\n### \u8868\u5355\u4f7f\u7528\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React, { useState, useRef } from \"react\";\nimport { Form, Input, Row, Col, TreeChecked, Slider, Button, Notify } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1', disabled: true },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nfunction Demo() {\n  const form = useRef()\n\n  const onSubmit = () => {\n    form.current.onSubmit()\n  }\n  const resetForm = () => {\n    form.current.resetForm()\n  }\n  const getFieldValues = () => {\n    console.log('getFieldValues', form.current.getFieldValues())\n  }\n\n  const setFieldValue=()=>{\n    form.current.setFieldValue('name','UIW')\n  }\n\n  return (\n    <div>\n      <Form\n        ref={form}\n        onChange={({ initial, current }) => {\n          console.log('onChange', initial, current);\n        }}\n        onSubmit={({ initial, current }) => {\n          if (current.tree === initial.tree) {\n            Notify.error({\n              title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n              description: `\u8868\u5355\u63d0\u4ea4\u5185\u5bb9\u4e3a\u7a7a\uff01`,\n            });\n          } else {\n            Notify.success({\n              title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            });\n          }\n        }}\n        fields={{\n          tree: {\n            label: \"\u6811\",\n            initialValue: ['3'],\n            children: <TreeChecked\n              data={data}\n              selectedKeys={['0-2-0']}\n            />\n          }\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row>\n                <Col style={{ maxWidth: 300 }}>{fields.tree}</Col>\n              </Row>\n              <Row>\n                <Col>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  )\n}\nexport default Demo\n```\n\n## Props\n\n\u5b8c\u5168\u7ee7\u627f [Tree](#/components/Tree) \u7ec4\u4ef6\u5c5e\u6027\uff0c\u9ed8\u8ba4\u521d\u59cb\u503c\u4e0d\u4e00\u6837\uff0c\u4e0b\u9762\u4ec5\u5217\u51fa\u9ed8\u8ba4\u4e0d\u4e00\u81f4\u7684 Props\u3002\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| checkStrictly | \u5b50\u8282\u70b9\u53d7\u7236\u8282\u70b9\u63a7\u5236\u8bbe\u7f6e `true`\uff0c\u9700\u8981\u914d\u5408 `multiple` \u53c2\u6570\u4f7f\u7528\u3002 | Boolean | `true` |\n| isSelected | \u662f\u5426\u9009\u4e2d\u5f53\u524d\u8282\u70b9 | Boolean | `false` |\n| multiple | \u652f\u6301\u70b9\u9009\u591a\u4e2a\u8282\u70b9 | Boolean | `true` |\n"}}}]);
//# sourceMappingURL=3055.ef35d5c8.chunk.js.map