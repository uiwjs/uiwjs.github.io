"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4307],{4307:function(e,n,t){t.r(n),n.default={components:{18:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){return n.default.createElement(o.Row,{gutter:10},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),onChange:function(e,n){console.log("---\x3e",e,n)}})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),format:"HH:mm",precision:"minute"})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),format:"HH",precision:"hour"})))}}(),45:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){var e=new Date(2018,1,24,4,5,35);return n.default.createElement(o.Row,{gutter:10},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),value:e})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),value:e,format:"HH:mm",precision:"minute"})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),value:e,format:"HH",precision:"hour"})))}}(),70:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){var e=new Date(2018,1,24,4,5,35);return n.default.createElement(o.Row,{gutter:10},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),size:"small",value:e})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),value:e,format:"HH",precision:"hour"})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),size:"large",value:e,format:"HH:mm",precision:"minute"})))}}(),97:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){return n.default.createElement("div",null,n.default.createElement(o.Form,{onSubmit:function(e){var t=e.initial,r=e.current;console.log("--\x3e>",t,r),r.date?o.Notify.success({title:"\u63d0\u4ea4\u6210\u529f\uff01",description:"\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a".concat(formatter("HH:mm:ss",r.date))}):o.Notify.error({title:"\u63d0\u4ea4\u5931\u8d25\uff01",description:n.default.createElement("span",null,"\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a",n.default.createElement("b",null,"\u7a7a"),"\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01")})},fields:{date:{labelClassName:"fieldLabel",labelFor:"date-inline",children:n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"})})}}},(function(e){var t=e.fields,r=(e.state,e.canSubmit);return n.default.createElement(o.Row,{gutter:10},n.default.createElement(o.Col,{style:{width:200},fixed:!0},t.date),n.default.createElement(o.Col,null,n.default.createElement(o.Button,{disabled:!r(),type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))})))}}(),146:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){return n.default.createElement(o.Row,{gutter:10,style:{maxWidth:360}},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),disabledMinutes:function(e,n){if(e%15!==0)return!0},disabledHours:function(e,n,t){if(e<3)return!0}})),n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),disabled:!0,value:new Date(2018,1,24,4,5,35)})))}}(),179:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){return n.default.createElement(o.Row,{gutter:10,style:{maxWidth:360}},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{hideDisabled:!0,icon:n.default.createElement(o.Icon,{type:"close"}),disabledMinutes:function(e,n){if(e%15!==0)return!0},disabledHours:function(e,n,t){if(e<3)return!0}})))}}(),210:function(){var e,n=(e=t(8133))&&e.__esModule?e:{default:e},o=t(6305);return function(){return n.default.createElement(o.Row,{gutter:10,style:{maxWidth:360}},n.default.createElement(o.Col,{style:{width:200},fixed:!0},n.default.createElement(o.TimePicker,{icon:n.default.createElement(o.Icon,{type:"close"}),hideDisabled:!0,disabledMinutes:function(e,n){if(e%15!==0)return!0},disabledSeconds:function(e,n){if(e%15!==0)return!0}})))}}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    onChange: function onChange(formatDate, date) {\n      console.log(\'---\x3e\', formatDate, date);\n    }\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    format: "HH:mm",\n    precision: "minute"\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    format: "HH",\n    precision: "hour"\n  })));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { TimePicker, Row, Col ,Icon} from \'uiw\';\n\nconst Demo = () => (\n  <Row gutter={10}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker\n        icon={<Icon type="close"/>}\n        onChange={(formatDate, date) => {\n          console.log(\'---\x3e\', formatDate, date);\n        }}\n      />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>} format="HH:mm" precision="minute" />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>} format="HH" precision="hour" />\n    </Col>\n  </Row>\n)\nexport default Demo'},45:{name:45,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  var value = new Date(2018, 1, 24, 4, 5, 35);\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    value: value\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    value: value,\n    format: "HH:mm",\n    precision: "minute"\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    value: value,\n    format: "HH",\n    precision: "hour"\n  })));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { TimePicker, Row, Col  ,Icon} from \'uiw\';\n\nconst Demo = () => {\n  const value = new Date(2018, 1, 24, 4,5,35);\n  return (\n    <Row gutter={10}>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH:mm" precision="minute" />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH" precision="hour" />\n      </Col>\n    </Row>\n  )\n}\nexport default Demo'},70:{name:70,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  var value = new Date(2018, 1, 24, 4, 5, 35);\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    size: "small",\n    value: value\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    value: value,\n    format: "HH",\n    precision: "hour"\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    size: "large",\n    value: value,\n    format: "HH:mm",\n    precision: "minute"\n  })));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { TimePicker, Row, Col ,Icon } from \'uiw\';\n\nconst Demo = () => {\n  const value = new Date(2018, 1, 24, 4,5,35);\n  return (\n    <Row gutter={10}>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} size="small" value={value} />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH" precision="hour" />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} size="large" value={value} format="HH:mm" precision="minute" />\n      </Col>\n    </Row>\n  )\n}\nexport default Demo'},97:{name:97,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Form, {\n    onSubmit: function onSubmit(_ref) {\n      var initial = _ref.initial,\n          current = _ref.current;\n      console.log(\'--\x3e>\', initial, current);\n\n      if (current.date) {\n        _uiw.Notify.success({\n          title: \'\u63d0\u4ea4\u6210\u529f\uff01\',\n          description: "\\u8868\\u5355\\u63D0\\u4EA4\\u65F6\\u95F4\\u6210\\u529F\\uFF0C\\u65F6\\u95F4\\u4E3A\\uFF1A".concat(formatter(\'HH:mm:ss\', current.date))\n        });\n      } else {\n        _uiw.Notify.error({\n          title: \'\u63d0\u4ea4\u5931\u8d25\uff01\',\n          description: /*#__PURE__*/_react["default"].createElement("span", null, "\\u8868\\u5355\\u63D0\\u4EA4\\u65F6\\u95F4\\u6210\\u529F\\uFF0C\\u65F6\\u95F4\\u4E3A\\uFF1A", /*#__PURE__*/_react["default"].createElement("b", null, "\\u7A7A"), "\\uFF0C\\u5C06\\u81EA\\u52A8\\u586B\\u5145\\u521D\\u59CB\\u5316\\u503C\\uFF01")\n        });\n      }\n    },\n    fields: {\n      date: {\n        labelClassName: \'fieldLabel\',\n        labelFor: \'date-inline\',\n        children: /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n          icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n            type: "close"\n          })\n        })\n      }\n    }\n  }, function (_ref2) {\n    var fields = _ref2.fields,\n        state = _ref2.state,\n        canSubmit = _ref2.canSubmit;\n    return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n      gutter: 10\n    }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n      style: {\n        width: 200\n      },\n      fixed: true\n    }, fields.date), /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n      disabled: !canSubmit(),\n      type: "primary",\n      htmlType: "submit"\n    }, "\\u63D0\\u4EA4")));\n  }));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { TimePicker, Notify, Row, Col, Form, Button ,Icon } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log('--\x3e>', initial, current);\n        if(current.date) {\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a${formatter('HH:mm:ss', current.date)}`,\n          });\n        } else {\n          Notify.error({\n            title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n            description: <span>\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a<b>\u7a7a</b>\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01</span>,\n          });\n        }\n      }}\n      fields={{\n        date: {\n          labelClassName: 'fieldLabel',\n          labelFor: 'date-inline',\n          children: <TimePicker  icon={<Icon type=\"close\"/>} />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <Row gutter={10}>\n            <Col style={{ width: 200 }} fixed>{fields.date}</Col>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n        )\n      }}\n    </Form>\n  </div>\n)\nexport default Demo"},146:{name:146,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10,\n    style: {\n      maxWidth: 360\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    disabledMinutes: function disabledMinutes(minute, type) {\n      if (minute % 15 !== 0) {\n        return true;\n      }\n    },\n    disabledHours: function disabledHours(hour, type, date) {\n      // console.log(\'~~:\', hour, type, date);\n      if (hour < 3) {\n        return true;\n      }\n    }\n  })), /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    disabled: true,\n    value: new Date(2018, 1, 24, 4, 5, 35)\n  })));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { TimePicker, Row, Col  ,Icon} from 'uiw';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n      <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type=\"close\"/>}\n        disabledMinutes={(minute, type) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledHours={(hour, type, date) => {\n          // console.log('~~:', hour, type, date);\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type=\"close\"/>}disabled value={new Date(2018, 1, 24, 4,5,35)} />\n    </Col>\n  </Row>\n)\nexport default Demo"},179:{name:179,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10,\n    style: {\n      maxWidth: 360\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    hideDisabled: true,\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    disabledMinutes: function disabledMinutes(minute, type) {\n      if (minute % 15 !== 0) {\n        return true;\n      }\n    },\n    disabledHours: function disabledHours(hour, type, date) {\n      // console.log(\'~~:\', hour, type, date);\n      if (hour < 3) {\n        return true;\n      }\n    }\n  })));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { TimePicker, Row, Col  ,Icon} from 'uiw';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker\n        hideDisabled  icon={<Icon type=\"close\"/>}\n        disabledMinutes={(minute, type) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledHours={(hour, type, date) => {\n          // console.log('~~:', hour, type, date);\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\nexport default Demo"},210:{name:210,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Row, {\n    gutter: 10,\n    style: {\n      maxWidth: 360\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Col, {\n    style: {\n      width: 200\n    },\n    fixed: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.TimePicker, {\n    icon: /*#__PURE__*/_react["default"].createElement(_uiw.Icon, {\n      type: "close"\n    }),\n    hideDisabled: true,\n    disabledMinutes: function disabledMinutes(minute, date) {\n      if (minute % 15 !== 0) {\n        return true;\n      }\n    },\n    disabledSeconds: function disabledSeconds(second, date) {\n      if (second % 15 !== 0) {\n        return true;\n      }\n    }\n  })));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { TimePicker, Row, Col  ,Icon} from 'uiw';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type=\"close\"/>}\n        hideDisabled\n        disabledMinutes={(minute, date) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledSeconds={(second, date) => {\n          if (second % 15 !== 0) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\nexport default Demo"}},source:'TimePicker \u65f6\u95f4\u9009\u62e9\u5668\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-time-picker/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-time-picker.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-time-picker)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-time-picker.svg?label=@uiw/react-time-picker)](https://npmjs.com/@uiw/react-time-picker)\n\n\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65f6\u95f4\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65f6\u95f4\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002\n\n```jsx\nimport { TimePicker } from \'uiw\';\n// or\nimport TimePicker from \'@uiw/react-time-picker\';\n```\n\n## \u57fa\u7840\u7528\u6cd5\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col ,Icon} from \'uiw\';\n\nconst Demo = () => (\n  <Row gutter={10}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker\n        icon={<Icon type="close"/>}\n        onChange={(formatDate, date) => {\n          console.log(\'---\x3e\', formatDate, date);\n        }}\n      />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>} format="HH:mm" precision="minute" />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>} format="HH" precision="hour" />\n    </Col>\n  </Row>\n)\nexport default Demo\n```\n\n## \u8bbe\u7f6e\u521d\u59cb\u503c\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col  ,Icon} from \'uiw\';\n\nconst Demo = () => {\n  const value = new Date(2018, 1, 24, 4,5,35);\n  return (\n    <Row gutter={10}>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH:mm" precision="minute" />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH" precision="hour" />\n      </Col>\n    </Row>\n  )\n}\nexport default Demo\n```\n\n## \u8bbe\u7f6e\u6309\u94ae\u5927\u5c0f\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col ,Icon } from \'uiw\';\n\nconst Demo = () => {\n  const value = new Date(2018, 1, 24, 4,5,35);\n  return (\n    <Row gutter={10}>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} size="small" value={value} />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} value={value} format="HH" precision="hour" />\n      </Col>\n      <Col style={{ width: 200 }} fixed>\n        <TimePicker  icon={<Icon type="close"/>} size="large" value={value} format="HH:mm" precision="minute" />\n      </Col>\n    </Row>\n  )\n}\nexport default Demo\n```\n\n## \u8868\u5355\u4e2d\u5e94\u7528\n\n\u5728\u8868\u5355\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5e76\u6ca1\u6709\u5c06 `format` \u683c\u5f0f\u5316\u540e\u7684\u6570\u636e\u8fd4\u56de\u7ed9\u4f60\uff0c\u800c\u662f\u8fd4\u56de\u7684\u4e00\u4e2a `Date`\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 [`formatter`](#/components/formatter) \u91cd\u65b0\u683c\u5f0f\u5316\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Notify, Row, Col, Form, Button ,Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log(\'--\x3e>\', initial, current);\n        if(current.date) {\n          Notify.success({\n            title: \'\u63d0\u4ea4\u6210\u529f\uff01\',\n            description: `\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a${formatter(\'HH:mm:ss\', current.date)}`,\n          });\n        } else {\n          Notify.error({\n            title: \'\u63d0\u4ea4\u5931\u8d25\uff01\',\n            description: <span>\u8868\u5355\u63d0\u4ea4\u65f6\u95f4\u6210\u529f\uff0c\u65f6\u95f4\u4e3a\uff1a<b>\u7a7a</b>\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01</span>,\n          });\n        }\n      }}\n      fields={{\n        date: {\n          labelClassName: \'fieldLabel\',\n          labelFor: \'date-inline\',\n          children: <TimePicker  icon={<Icon type="close"/>} />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <Row gutter={10}>\n            <Col style={{ width: 200 }} fixed>{fields.date}</Col>\n            <Col>\n              <Button disabled={!canSubmit()} type="primary" htmlType="submit">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n        )\n      }}\n    </Form>\n  </div>\n)\nexport default Demo\n```\n\n## \u7981\u7528\n\n\u53ef\u4ee5\u4f7f\u7528 `disabledHours` `disabledMinutes` `disabledSeconds` \u7981\u7528\u90e8\u5206\u65f6\u95f4\u9009\u62e9\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col  ,Icon} from \'uiw\';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n      <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>}\n        disabledMinutes={(minute, type) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledHours={(hour, type, date) => {\n          // console.log(\'~~:\', hour, type, date);\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>}disabled value={new Date(2018, 1, 24, 4,5,35)} />\n    </Col>\n  </Row>\n)\nexport default Demo\n```\n\n## \u4e0d\u663e\u793a\u7981\u7528\n\n\u53ef\u4ee5\u4f7f\u7528 `hideDisabled` \u5c06\u7981\u7528\u7684\u90e8\u5206\u65f6\u95f4\u9690\u85cf\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col  ,Icon} from \'uiw\';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker\n        hideDisabled  icon={<Icon type="close"/>}\n        disabledMinutes={(minute, type) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledHours={(hour, type, date) => {\n          // console.log(\'~~:\', hour, type, date);\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\nexport default Demo\n```\n\n## \u95f4\u9694\u65f6\u95f4\n\n\u53ef\u4ee5\u4f7f\u7528 `hideDisabled` \u5c06\u7981\u7528\u7684\u90e8\u5206\u65f6\u95f4\u9690\u85cf\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from \'react\';\nimport { TimePicker, Row, Col  ,Icon} from \'uiw\';\n\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col style={{ width: 200 }} fixed>\n      <TimePicker  icon={<Icon type="close"/>}\n        hideDisabled\n        disabledMinutes={(minute, date) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledSeconds={(second, date) => {\n          if (second % 15 !== 0) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\nexport default Demo\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u521d\u59cb\u65f6\u95f4\u503c | Date | - |\n| placeholder | \u8f93\u5165\u6846\u63d0\u793a\u6587\u5b57 | String | - |\n| format | \u683c\u5f0f\u5316\u65f6\u95f4\uff0c\u89c4\u5219\u67e5\u770b [`formatter`](#/components/formatter) \u6587\u6863 | Function | `HH:mm:ss` |\n| precision | \u9009\u62e9\u65f6\u95f4\u7cbe\u786e\u5ea6 | Enum{`hour`, `minute`, `second`} | `false` |\n| disabled | \u7981\u7528\u5168\u90e8\u64cd\u4f5c | Boolean | `false` |\n| disabledHours | \u7981\u6b62\u9009\u62e9\u90e8\u5206\u5c0f\u65f6\u9009\u9879 | Function(hour, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |\n| disabledMinutes | \u7981\u6b62\u9009\u62e9\u90e8\u5206\u5206\u949f\u9009\u9879 | Function(minute, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |\n| disabledSeconds | \u7981\u6b62\u9009\u62e9\u90e8\u5206\u79d2\u9009\u9879 | Function(second, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |\n| hideDisabled | \u4e0d\u53ef\u9009\u62e9\u7684\u9879\u9690\u85cf | Boolean | `false` |\n| onChange | \u65f6\u95f4\u9009\u62e9\u7684\u56de\u8c03\u51fd\u6570 | Function(formatDate, Date, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>, num, disableds) | - |\n\n`uiw@3.3.0+` \u7ec4\u4ef6\u96c6\u6210\u90e8\u5206 Input\uff0c\u4e0d\u518d\u901a\u8fc7 inputProps \u5c5e\u6027\u4f20\u503c\uff0c\u66f4\u591a\u5c5e\u6027\u8bf7\u53c2\u8003 [Input](#/components/input)\n\n## ~~Props.inputProps~~\n\n`uiw@3.3.0+` \u5c06\u4e0d\u652f\u6301\u6b64\u5c5e\u6027\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| ~~inputProps~~ | ~~\u5c06\u53c2\u6570\u4f20\u9012\u7ed9 [`<Input>`](#/components/input) \u7ec4\u4ef6~~ | `Object` | - |\n\n## Props.popoverProps\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| popoverProps | \u5c06\u53c2\u6570\u4f20\u9012\u7ed9 [`<Popover>`](#/components/popover) \u7ec4\u4ef6 | `Object` | - |\n'}}}]);
//# sourceMappingURL=4307.be2d2d1e.chunk.js.map