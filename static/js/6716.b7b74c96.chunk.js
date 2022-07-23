"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6716],{6716:function(e,n,t){t.r(n),n.default={components:{18:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(832);return function(){return n.default.createElement("div",null,n.default.createElement(u.FileInput,{multiple:"multiple",style:{maxWidth:200},size:"small",onChange:function(e){console.log(e)}}),n.default.createElement("br",null),n.default.createElement(u.FileInput,{multiple:"multiple",style:{maxWidth:200}}),n.default.createElement("br",null))}}(),41:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(832);return function(){return n.default.createElement("div",null,n.default.createElement(u.FileInput,{uploadType:"card",size:"large",showFileIcon:{showPreviewIcon:!1,showRemoveIcon:!0},onPreview:function(e){return console.log(e)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4"}],onChange:function(e){return console.log(e)}},n.default.createElement(u.Icon,{type:"plus"})),n.default.createElement("br",null),n.default.createElement(u.FileInput,{uploadType:"card",shape:"circle",showFileIcon:{showPreviewIcon:!1,showRemoveIcon:!0},onPreview:function(e){return console.log(e)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4"}],onChange:function(e){return console.log(e)}},n.default.createElement(u.Icon,{type:"plus"})),n.default.createElement("br",null),n.default.createElement(u.FileInput,{uploadType:"card",size:"small",showFileIcon:{showPreviewIcon:!1,showRemoveIcon:!0},onPreview:function(e){return console.log(e)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4"}],onChange:function(e){return console.log(e)}},n.default.createElement(u.Icon,{type:"plus"})))}}(),104:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(832);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var u,l,r=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(u=t.next()).done)&&(r.push(u.value),!n||r.length!==n);a=!0);}catch(i){o=!0,l=i}finally{try{a||null==t.return||t.return()}finally{if(o)throw l}}return r}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,u=new Array(n);t<n;t++)u[t]=e[t];return u}return function(){var e=l(n.default.useState(!1),2),t=e[0],r=e[1],a=l(n.default.useState(null),2),o=a[0],i=a[1];return console.log("curfile",o),n.default.createElement(n.default.Fragment,null,n.default.createElement(u.Overlay,{isOpen:t,onClosed:function(){return r(!1)}},n.default.createElement("img",{src:"".concat(null===o||void 0===o?void 0:o.dataURL),alt:"".concat(null===o||void 0===o?void 0:o.name)})),n.default.createElement(u.FileInput,{uploadType:"picture",size:"large",onPreview:function(e){r(!0),i(e)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}]},n.default.createElement(u.Icon,{type:"plus"})))}}(),143:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(832);return function(){return n.default.createElement("div",null,n.default.createElement(u.FileInput,{uploadType:"picture",size:"large",onPreview:function(){return console.log(234)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}]},n.default.createElement(u.Button,null,"\u65b0\u589e")),n.default.createElement("br",null),n.default.createElement(u.FileInput,{uploadType:"picture",shape:"circle",onPreview:function(){return console.log(234)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}]},n.default.createElement(u.Button,null,"\u65b0\u589e")),n.default.createElement("br",null),n.default.createElement(u.FileInput,{uploadType:"picture",size:"small",onPreview:function(){return console.log(234)},value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}]},n.default.createElement(u.Button,null,"\u65b0\u589e")),n.default.createElement("br",null),n.default.createElement(u.FileInput,{uploadType:"text",multiple:!0,maxNumber:2,value:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}]},n.default.createElement(u.Button,null,"\u65b0\u589e")))}}(),201:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},u=t(832);return function(){return n.default.createElement("div",null,n.default.createElement(u.Form,{onSubmit:function(e){e.initial;var n=e.current;console.log("current",n)},fields:{picture1:{label:"\u56fe\u7247\u5899",initialValue:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}],children:n.default.createElement(u.FileInput,{uploadType:"card"},n.default.createElement(u.Icon,{type:"plus"}))},picture2:{label:"\u56fe\u7247\u5217\u8868",initialValue:[{dataURL:"https://avatars2.githubusercontent.com/u/1680273?s=40&v=4",name:"uiw.png"}],children:n.default.createElement(u.FileInput,{uploadType:"picture"},n.default.createElement(u.Button,null,"\u65b0\u589e"))},picture3:{label:"\u56fe\u7247\u540d\u79f0\u5217\u8868",children:n.default.createElement(u.FileInput,{uploadType:"text"},n.default.createElement(u.Button,null,"\u65b0\u589e"))}}},(function(e){var t=e.fields,l=e.state,r=e.canSubmit;return n.default.createElement("div",null,n.default.createElement(u.Row,null,n.default.createElement(u.Col,null,t.picture1)),n.default.createElement(u.Row,null,n.default.createElement(u.Col,null,t.picture2)),n.default.createElement(u.Row,null,n.default.createElement(u.Col,null,t.picture3)),n.default.createElement(u.Row,{gutter:10},n.default.createElement(u.Col,null,n.default.createElement(u.Button,{disabled:!r(),type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))),n.default.createElement(u.Row,null,n.default.createElement(u.Col,null,n.default.createElement("pre",{style:{padding:"10px 0 0 10px"}},JSON.stringify(l.current,null,2)))))})))}}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  var onChange = function onChange(e) {\n    console.log(e);\n  };\n\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    multiple: "multiple",\n    style: {\n      maxWidth: 200\n    },\n    size: "small",\n    onChange: onChange\n  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    multiple: "multiple",\n    style: {\n      maxWidth: 200\n    }\n  }), /*#__PURE__*/_react["default"].createElement("br", null));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { FileInput, Button } from \'uiw\';\n\nconst Demo = () => {\n  const onChange = (e) => {\n    console.log(e)\n  }\n  return (\n    <div>\n      <FileInput multiple="multiple" style={{ maxWidth: 200 }} size="small" onChange={onChange} />\n      <br />\n      <FileInput multiple="multiple" style={{ maxWidth: 200 }} />\n      <br />\n    </div>\n  )\n}\n\nexport default Demo'},41:{name:41,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "card",\n    size: "large",\n    showFileIcon: {\n      showPreviewIcon: false,\n      showRemoveIcon: true\n    },\n    onPreview: function onPreview(file) {\n      return console.log(file);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'\n    }],\n    onChange: function onChange(items) {\n      return console.log(items);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n    type: "plus"\n  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "card",\n    shape: "circle",\n    showFileIcon: {\n      showPreviewIcon: false,\n      showRemoveIcon: true\n    },\n    onPreview: function onPreview(file) {\n      return console.log(file);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'\n    }],\n    onChange: function onChange(items) {\n      return console.log(items);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n    type: "plus"\n  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "card",\n    size: "small",\n    showFileIcon: {\n      showPreviewIcon: false,\n      showRemoveIcon: true\n    },\n    onPreview: function onPreview(file) {\n      return console.log(file);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'\n    }],\n    onChange: function onChange(items) {\n      return console.log(items);\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n    type: "plus"\n  })));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { FileInput, Button,Icon } from \'uiw\';\n\nconst Demo = () => {\n  return (\n    <div>\n      <FileInput\n        uploadType="card"\n        size="large"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type="plus" />\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType="card"\n        shape="circle"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type="plus" />\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType="card"\n        size="small"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type="plus" />\n      </FileInput>\n    </div>\n  )\n}\n\nexport default Demo'},104:{name:104,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar Demo = function Demo() {\n  var _React$useState = _react["default"].useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      visible = _React$useState2[0],\n      visibleSet = _React$useState2[1];\n\n  var _React$useState3 = _react["default"].useState(null),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      curfile = _React$useState4[0],\n      curFileSet = _React$useState4[1];\n\n  console.log(\'curfile\', curfile);\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_uiw.Overlay, {\n    isOpen: visible,\n    onClosed: function onClosed() {\n      return visibleSet(false);\n    }\n  }, /*#__PURE__*/_react["default"].createElement("img", {\n    src: "".concat(curfile === null || curfile === void 0 ? void 0 : curfile.dataURL),\n    alt: "".concat(curfile === null || curfile === void 0 ? void 0 : curfile.name)\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "picture",\n    size: "large",\n    onPreview: function onPreview(file) {\n      visibleSet(true);\n      curFileSet(file);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n      name: \'uiw.png\'\n    }]\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n    type: "plus"\n  })));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { FileInput, Overlay,Icon } from 'uiw';\n\nconst Demo=()=>{\n  const [visible,visibleSet]=React.useState(false)\n  const [curfile,curFileSet]=React.useState(null)\n  console.log('curfile',curfile)\n\n   return(\n     <>\n      <Overlay\n        isOpen={visible}\n        onClosed={()=>visibleSet(false)}\n      >\n        <img src={`${curfile?.dataURL}`} alt={`${curfile?.name}`} />\n      </Overlay>\n      <FileInput\n        uploadType=\"picture\"\n        size=\"large\"\n        onPreview={(file) =>{\n          visibleSet(true)\n          curFileSet(file)\n        }}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Icon type=\"plus\" />\n      </FileInput>\n    </>\n   )\n}\n\nexport default Demo"},143:{name:143,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "picture",\n    size: "large",\n    onPreview: function onPreview() {\n      return console.log(234);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n      name: \'uiw.png\'\n    }]\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "picture",\n    shape: "circle",\n    onPreview: function onPreview() {\n      return console.log(234);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n      name: \'uiw.png\'\n    }]\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "picture",\n    size: "small",\n    onPreview: function onPreview() {\n      return console.log(234);\n    },\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n      name: \'uiw.png\'\n    }]\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n    uploadType: "text",\n    multiple: true,\n    maxNumber: 2,\n    value: [{\n      dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n      name: \'uiw.png\'\n    }]\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E")));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { FileInput, Button } from 'uiw';\n\nfunction Demo() {\n  return (\n    <div>\n      <FileInput\n        uploadType=\"picture\"\n        size=\"large\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"picture\"\n        shape=\"circle\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"picture\"\n        size=\"small\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"text\"\n        multiple\n        maxNumber={2}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n    </div>\n  );\n}\nexport default Demo"},201:{name:201,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Form, {\n    onSubmit: function onSubmit(_ref) {\n      var initial = _ref.initial,\n          current = _ref.current;\n      console.log(\'current\', current);\n    },\n    fields: {\n      picture1: {\n        label: \'\u56fe\u7247\u5899\',\n        initialValue: [{\n          dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n          name: \'uiw.png\'\n        }],\n        children: /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n          uploadType: "card"\n        }, /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n          type: "plus"\n        }))\n      },\n      picture2: {\n        label: \'\u56fe\u7247\u5217\u8868\',\n        initialValue: [{\n          dataURL: \'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4\',\n          name: \'uiw.png\'\n        }],\n        children: /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n          uploadType: "picture"\n        }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E"))\n      },\n      picture3: {\n        label: \'\u56fe\u7247\u540d\u79f0\u5217\u8868\',\n        children: /*#__PURE__*/_react["default"].createElement(_uiw.FileInput, {\n          uploadType: "text"\n        }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, null, "\\u65B0\\u589E"))\n      }\n    }\n  }, function (_ref2) {\n    var fields = _ref2.fields,\n        state = _ref2.state,\n        canSubmit = _ref2.canSubmit;\n    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, fields.picture1)), /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, fields.picture2)), /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, fields.picture3)), /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n      gutter: 10\n    }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n      disabled: !canSubmit(),\n      type: "primary",\n      htmlType: "submit"\n    }, "\\u63D0\\u4EA4"))), /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement("pre", {\n      style: {\n        padding: \'10px 0 0 10px\'\n      }\n    }, JSON.stringify(state.current, null, 2)))));\n  }));\n}\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Form, Row, Col, Icon,FileInput,Button } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Form\n      onSubmit={({initial, current}) => {\n         console.log('current',current)\n      }}\n      fields={{\n        picture1: {\n          label: '\u56fe\u7247\u5899',\n          initialValue: [\n            {\n              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'\n            }\n          ],\n          children: (\n            <FileInput uploadType=\"card\">\n              <Icon type=\"plus\" />\n            </FileInput>\n          )\n        },\n        picture2: {\n          label: '\u56fe\u7247\u5217\u8868',\n          initialValue: [\n            {\n              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'\n            }\n          ],\n          children: (\n            <FileInput uploadType=\"picture\">\n              <Button>\u65b0\u589e</Button>\n            </FileInput>\n          )\n        },\n        picture3: {\n          label: '\u56fe\u7247\u540d\u79f0\u5217\u8868',\n          children: (\n            <FileInput uploadType=\"text\">\n              <Button>\u65b0\u589e</Button>\n            </FileInput>\n          )\n        },\n      }}>\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col>{fields.picture1}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.picture2}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.picture3}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                <pre style={{ padding: '10px 0 0 10px' }}>\n                  {JSON.stringify(state.current, null, 2)}\n                </pre>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n}\nexport default Demo"}},source:"FileInput \u4e0a\u4f20\u8f93\u5165\u6846\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-file-input/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-file-input.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-file-input)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-file-input.svg?label=@uiw/react-file-input)](https://npmjs.com/@uiw/react-file-input)\n\n\u8fd9\u4e2a\u7ec4\u4ef6\u4ec5\u4ec5\u662f\u5bf9 `<input type=\"file\">` \u7684\u7f8e\u5316\uff0c\u4ed6\u662f\u57fa\u4e8e Input \u7ec4\u4ef6\u5c01\u88c5      \u3002\n\n```jsx\nimport { FileInput } from 'uiw';\n// or\nimport FileInput from '@uiw/react-file-input';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { FileInput, Button } from 'uiw';\n\nconst Demo = () => {\n  const onChange = (e) => {\n    console.log(e)\n  }\n  return (\n    <div>\n      <FileInput multiple=\"multiple\" style={{ maxWidth: 200 }} size=\"small\" onChange={onChange} />\n      <br />\n      <FileInput multiple=\"multiple\" style={{ maxWidth: 200 }} />\n      <br />\n    </div>\n  )\n}\n\nexport default Demo\n```\n\n### \u56fe\u7247\u5899\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { FileInput, Button,Icon } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <FileInput\n        uploadType=\"card\"\n        size=\"large\"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type=\"plus\" />\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"card\"\n        shape=\"circle\"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type=\"plus\" />\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"card\"\n        size=\"small\"\n        showFileIcon={{\n          showPreviewIcon: false,\n          showRemoveIcon: true\n        }}\n        onPreview={(file) => console.log(file)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4'}\n        ]}\n        onChange={(items) => console.log(items)}\n      >\n        <Icon type=\"plus\" />\n      </FileInput>\n    </div>\n  )\n}\n\nexport default Demo\n```\n\n### \u56fe\u7247\u9884\u89c8\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { FileInput, Overlay,Icon } from 'uiw';\n\nconst Demo=()=>{\n  const [visible,visibleSet]=React.useState(false)\n  const [curfile,curFileSet]=React.useState(null)\n  console.log('curfile',curfile)\n\n   return(\n     <>\n      <Overlay\n        isOpen={visible}\n        onClosed={()=>visibleSet(false)}\n      >\n        <img src={`${curfile?.dataURL}`} alt={`${curfile?.name}`} />\n      </Overlay>\n      <FileInput\n        uploadType=\"picture\"\n        size=\"large\"\n        onPreview={(file) =>{\n          visibleSet(true)\n          curFileSet(file)\n        }}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Icon type=\"plus\" />\n      </FileInput>\n    </>\n   )\n}\n\nexport default Demo\n```\n\n### \u56fe\u7247\u5217\u8868\u6837\u5f0f\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { FileInput, Button } from 'uiw';\n\nfunction Demo() {\n  return (\n    <div>\n      <FileInput\n        uploadType=\"picture\"\n        size=\"large\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"picture\"\n        shape=\"circle\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"picture\"\n        size=\"small\"\n        onPreview={() => console.log(234)}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n      <br />\n      <FileInput\n        uploadType=\"text\"\n        multiple\n        maxNumber={2}\n        value={[\n          { dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png' }\n        ]}\n      >\n        <Button>\u65b0\u589e</Button>\n      </FileInput>\n    </div>\n  );\n}\nexport default Demo\n```\n\n### \u5728`Form`\u8868\u5355\u4e2d\u4f7f\u7528\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Form, Row, Col, Icon,FileInput,Button } from 'uiw';\n\nfunction Demo() {\n  return <div>\n    <Form\n      onSubmit={({initial, current}) => {\n         console.log('current',current)\n      }}\n      fields={{\n        picture1: {\n          label: '\u56fe\u7247\u5899',\n          initialValue: [\n            {\n              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'\n            }\n          ],\n          children: (\n            <FileInput uploadType=\"card\">\n              <Icon type=\"plus\" />\n            </FileInput>\n          )\n        },\n        picture2: {\n          label: '\u56fe\u7247\u5217\u8868',\n          initialValue: [\n            {\n              dataURL: 'https://avatars2.githubusercontent.com/u/1680273?s=40&v=4', name: 'uiw.png'\n            }\n          ],\n          children: (\n            <FileInput uploadType=\"picture\">\n              <Button>\u65b0\u589e</Button>\n            </FileInput>\n          )\n        },\n        picture3: {\n          label: '\u56fe\u7247\u540d\u79f0\u5217\u8868',\n          children: (\n            <FileInput uploadType=\"text\">\n              <Button>\u65b0\u589e</Button>\n            </FileInput>\n          )\n        },\n      }}>\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col>{fields.picture1}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.picture2}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.picture3}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                <pre style={{ padding: '10px 0 0 10px' }}>\n                  {JSON.stringify(state.current, null, 2)}\n                </pre>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n}\nexport default Demo\n```\n\n## Props\n\n- `uploadType: input` \u57fa\u7840\u8f93\u5165\u6846\u4e0a\u4f20\n\n- `uploadType: picture` \u56fe\u7247\u5217\u5c55\u793a\u5217\u8868\uff0c\u663e\u793a\u56fe\u7247\n\n- `uploadType: text` \u56fe\u7247\u5217\u5c55\u793a\u5217\u8868\uff0c\u4e0d\u663e\u793a\u56fe\u7247\n\n- `uploadType: card` \u56fe\u7247\u5899\u5217\u8868\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| uploadType | \u4e0a\u4f20\u5c55\u793a\u7c7b\u578b | `input`\u3001`picture`\u3001`text`\u3001`card` | `input` |\n| className | CSS\u7c7b\u540d\u79f0 | String | - |\n| multiple | \u662f\u5426\u591a\u9009\u4e0a\u4f20 | boolean | - |\n\n\n### Props uploadType input\u7c7b\u578b\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| dataLabel | input \u540e\u7f6e\u6587\u5b57 | `string` | `Browse` |\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [Input](#/components/input)\u3002\n\n\n### Props uploadType \u975einput\u7c7b\u578b\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u9ed8\u8ba4\u56fe\u7247\u5217\u8868  | FileInputValue[] | - |\n| readonly | \u662f\u5426\u662f\u53ea\u8bfb\u6a21\u5f0f | boolean | false |\n| maxNumber | \u6587\u4ef6\u4e0a\u4f20\u6570\u91cf | boolean | false |\n| shape | \u56fe\u7247\u5c55\u793a\u5f62\u72b6  | `circle`\u3001`round` | `round` |\n| size | \u56fe\u7247\u5c55\u793a\u5927\u5c0f  | `large`\u3001`middle`\u3001`small` | `middle` |\n| showFileIcon | \u8bbe\u7f6e\u56fe\u6807\u6309\u94ae\u662f\u5426\u5c55\u793a | {showPreviewIcon?: boolean,showRemoveIcon?: boolean} | {showPreviewIcon: true, showRemoveIcon: true} |\n| onChange | \u6587\u4ef6\u4e0a\u4f20\u56de\u8c03 | (value: FileInputValue[]) => void | - |\n| onPreview | \u9884\u89c8\u56fe\u6807\u65f6\u7684\u56de\u8c03 | (value: FileInputValue[]) => void | - |\n\n"}}}]);
//# sourceMappingURL=6716.b7b74c96.chunk.js.map