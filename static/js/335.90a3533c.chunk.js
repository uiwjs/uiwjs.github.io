"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[335],{335:function(e,t,n){n.r(t),t.default={components:{18:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(968);return function(){return t.default.createElement("div",null,t.default.createElement(r.Switch,{checked:!0,style:{marginRight:10}}),t.default.createElement(r.Switch,{style:{marginRight:10}}),t.default.createElement(r.Switch,{"data-checked":"\u5f00","data-unchecked":"\u5173"},"\u7535\u6e90"))}}(),35:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(968);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}return function(){return t.default.createElement(r.Form,{onChange:function(e){e.initial,e.current},resetOnSubmit:!1,onSubmitError:function(e){return e&&e.filed?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.filed):null},onSubmit:function(e){var t=e.initial,n=e.current;console.log("switch::",t,n);var r={};if(Object.keys(r).length>0){var o=new Error;throw o.filed=r,o}},fields:{switch:{checked:!0,initialValue:!0,label:"\u8bf7\u8f93\u5165\u5185\u5bb9",help:"\u5fc5\u9009\u9009\u9879\uff01",validator:function(e){return e?null:"\u5fc5\u586b\u9009\u9879\uff01"},children:t.default.createElement(r.Switch,{style:{maxWidth:200}})}}},(function(e){var n=e.fields,o=e.state,i=e.canSubmit;return t.default.createElement("div",null,t.default.createElement(r.Row,null,t.default.createElement(r.Col,null,n.switch)),t.default.createElement(r.Row,null,t.default.createElement(r.Col,null,t.default.createElement(r.Button,{disabled:!i(),type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))),t.default.createElement(r.Row,null,t.default.createElement(r.Col,null,t.default.createElement("pre",{style:{padding:10,marginTop:10}},JSON.stringify(o.current,null,2)))))}))}}(),93:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(968);return function(){return t.default.createElement("div",null,t.default.createElement(r.Switch,{"data-checked":"\u5f00","data-unchecked":"\u5173",onChange:function(e){console.log("e",e.target.checked)},style:{marginRight:10}}))}}(),115:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(968);return function(){return t.default.createElement("div",null,t.default.createElement(r.Switch,{disabled:!0,checked:!0,style:{marginRight:10}}),t.default.createElement(r.Switch,{disabled:!0,style:{marginRight:10}}),t.default.createElement(r.Switch,{disabled:!0,"data-checked":"\u5f00","data-unchecked":"\u5173"},"\u7535\u6e90"))}}(),131:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(968);return function(){return t.default.createElement("div",null,t.default.createElement(r.Switch,{size:"large",style:{marginRight:10},"data-checked":"\u5f00","data-unchecked":"\u5173"}),t.default.createElement(r.Switch,{size:"large",checked:!0,style:{marginRight:10}}),t.default.createElement(r.Switch,{style:{marginRight:10}}),t.default.createElement(r.Switch,{style:{marginRight:10},"data-checked":"\u5f00","data-unchecked":"\u5173"}),t.default.createElement(r.Switch,{size:"small","data-checked":"\u5f00","data-unchecked":"\u5173"},"\u7535\u6e90"))}}(),151:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=(t=n(8133))&&t.__esModule?t:{default:t},o=n(968);function i(e,t){if(n=e,!(null!=(r=t)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,n){if(n&&("object"===e(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}return function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(d,e);var t,n,l,s=u(d);function d(e){var t;return i(this,d),(t=s.call(this,e)).state={checked:!0},t}return t=d,(n=[{key:"onChange",value:function(e){console.log("~~~:::"),this.setState({checked:e.target.checked})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{style:{backgroundColor:"#fff",margin:-15,padding:15,borderRadius:"5px 5px 0 0"}},r.default.createElement(o.Switch,{onChange:this.onChange.bind(this),checked:this.state.checked,style:{marginRight:10}}),r.default.createElement(o.Button,{size:"small",type:"primary",onClick:function(){e.setState({checked:!e.state.checked})}},"\u70b9\u51fb\u6309\u94ae\u6539\u53d8 Switch \u72b6\u6001"))}}])&&c(t.prototype,n),l&&c(t,l),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    checked: true,\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173"\n  }, "\\u7535\\u6E90"));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo"},35:{name:35,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Form, {\n    onChange: function onChange(_ref) {\n      var initial = _ref.initial,\n          current = _ref.current;\n    },\n    resetOnSubmit: false,\n    onSubmitError: function onSubmitError(error) {\n      return error && error.filed ? _objectSpread({}, error.filed) : null;\n    },\n    onSubmit: function onSubmit(_ref2) {\n      var initial = _ref2.initial,\n          current = _ref2.current;\n      console.log(\'switch::\', initial, current);\n      var ErrObj = {};\n\n      if (Object.keys(ErrObj).length > 0) {\n        var err = new Error();\n        err.filed = ErrObj;\n        throw err;\n      }\n    },\n    fields: {\n      "switch": {\n        checked: true,\n        initialValue: true,\n        label: \'\u8bf7\u8f93\u5165\u5185\u5bb9\',\n        help: \'\u5fc5\u9009\u9009\u9879\uff01\',\n        validator: function validator(value) {\n          return !value ? \'\u5fc5\u586b\u9009\u9879\uff01\' : null;\n        },\n        children: /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n          style: {\n            maxWidth: 200\n          }\n        })\n      }\n    }\n  }, function (_ref3) {\n    var fields = _ref3.fields,\n        state = _ref3.state,\n        canSubmit = _ref3.canSubmit;\n    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, fields["switch"])), /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n      disabled: !canSubmit(),\n      type: "primary",\n      htmlType: "submit"\n    }, "\\u63D0\\u4EA4"))), /*#__PURE__*/_react["default"].createElement(_uiw.Row, null, /*#__PURE__*/_react["default"].createElement(_uiw.Col, null, /*#__PURE__*/_react["default"].createElement("pre", {\n      style: {\n        padding: 10,\n        marginTop: 10\n      }\n    }, JSON.stringify(state.current, null, 2)))));\n  });\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Form, Switch, Row, Col, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <Form\n    onChange={({ initial, current }) => { }}\n    resetOnSubmit={false}\n    onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}\n    onSubmit={({initial, current}) => {\n      console.log('switch::', initial, current)\n      const ErrObj = {};\n      if(Object.keys(ErrObj).length > 0) {\n        const err = new Error();\n        err.filed = ErrObj;\n        throw err;\n      }\n    }}\n    fields={{\n      switch: {\n        checked: true,\n        initialValue: true,\n        label: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n        help: '\u5fc5\u9009\u9009\u9879\uff01',\n        validator: value => !value ? '\u5fc5\u586b\u9009\u9879\uff01' : null,\n        children: <Switch style={{ maxWidth: 200 }} />,\n      },\n    }}\n  >\n    {({ fields, state, canSubmit }) => {\n      return (\n        <div>\n          <Row>\n            <Col>{fields.switch}</Col>\n          </Row>\n          <Row>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <pre style={{ padding: 10, marginTop: 10 }}>\n                {JSON.stringify(state.current, null, 2)}\n              </pre>\n            </Col>\n          </Row>\n        </div>\n      );\n    }}\n  </Form>\n);\n\nexport default Demo"},93:{name:93,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173",\n    onChange: function onChange(e) {\n      console.log(\'e\', e.target.checked);\n    },\n    style: {\n      marginRight: 10\n    }\n  }));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch\n      data-checked=\"\u5f00\"\n      data-unchecked=\"\u5173\"\n      onChange={(e) => {\n        console.log('e', e.target.checked);\n      }}\n      style={{ marginRight: 10 }}\n    />\n  </div>\n);\nexport default Demo"},115:{name:115,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    disabled: true,\n    checked: true,\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    disabled: true,\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    disabled: true,\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173"\n  }, "\\u7535\\u6E90"));\n};\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch disabled checked style={{ marginRight: 10 }} />\n    <Switch disabled style={{ marginRight: 10 }} />\n    <Switch disabled data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo"},131:{name:131,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    size: "large",\n    style: {\n      marginRight: 10\n    },\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    size: "large",\n    checked: true,\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    style: {\n      marginRight: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    style: {\n      marginRight: 10\n    },\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173"\n  }), /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n    size: "small",\n    "data-checked": "\\u5F00",\n    "data-unchecked": "\\u5173"\n  }, "\\u7535\\u6E90"));\n};\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Switch } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Switch size="large" style={{ marginRight: 10 }} data-checked="\u5f00" data-unchecked="\u5173" />\n    <Switch size="large" checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} data-checked="\u5f00" data-unchecked="\u5173" />\n    <Switch size="small" data-checked="\u5f00" data-unchecked="\u5173">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo'},151:{name:151,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Demo = /*#__PURE__*/function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  var _super = _createSuper(Demo);\n\n  function Demo(props) {\n    var _this;\n\n    _classCallCheck(this, Demo);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      checked: true\n    };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: "onChange",\n    value: function onChange(e) {\n      console.log(\'~~~:::\');\n      this.setState({\n        checked: e.target.checked\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/_react["default"].createElement("div", {\n        style: {\n          backgroundColor: \'#fff\',\n          margin: -15,\n          padding: 15,\n          borderRadius: \'5px 5px 0 0\'\n        }\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Switch, {\n        onChange: this.onChange.bind(this),\n        checked: this.state.checked,\n        style: {\n          marginRight: 10\n        }\n      }), /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n        size: "small",\n        type: "primary",\n        onClick: function onClick() {\n          _this2.setState({\n            checked: !_this2.state.checked\n          });\n        }\n      }, "\\u70B9\\u51FB\\u6309\\u94AE\\u6539\\u53D8 Switch \\u72B6\\u6001"));\n    }\n  }]);\n\n  return Demo;\n}(_react["default"].Component);\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Switch, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    }\n  }\n  onChange(e) {\n    console.log('~~~:::');\n    this.setState({ checked: e.target.checked });\n  }\n  render() {\n    return (\n      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n        <Switch onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />\n        <Button\n          size=\"small\"\n          type=\"primary\"\n          onClick={() => {\n            this.setState({ checked: !this.state.checked });\n          }}\n        >\n          \u70b9\u51fb\u6309\u94ae\u6539\u53d8 Switch \u72b6\u6001\n        </Button>\n      </div>\n    )\n  }\n}\nexport default Demo"}},source:"Switch \u5f00\u5173\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-switch/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-switch.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-switch)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-switch.svg?label=@uiw/react-switch)](https://npmjs.com/@uiw/react-switch)\n\n\u8868\u793a\u4e24\u79cd\u76f8\u4e92\u5bf9\u7acb\u7684\u72b6\u6001\u95f4\u7684\u5207\u6362\uff0c\u591a\u7528\u4e8e\u89e6\u53d1\u300c\u5f00/\u5173\u300d\u3002\u9009\u4e2d\u65f6\u7684\u5185\u5bb9\u652f\u6301\u54cd\u5e94\u5f0f\u3002\n\n```jsx\nimport { Switch } from 'uiw';\n// or\nimport Switch from '@uiw/react-switch';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo\n```\n\n\n### Form \u4e2d\u4f7f\u7528 Switch\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Form, Switch, Row, Col, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <Form\n    onChange={({ initial, current }) => { }}\n    resetOnSubmit={false}\n    onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}\n    onSubmit={({initial, current}) => {\n      console.log('switch::', initial, current)\n      const ErrObj = {};\n      if(Object.keys(ErrObj).length > 0) {\n        const err = new Error();\n        err.filed = ErrObj;\n        throw err;\n      }\n    }}\n    fields={{\n      switch: {\n        checked: true,\n        initialValue: true,\n        label: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n        help: '\u5fc5\u9009\u9009\u9879\uff01',\n        validator: value => !value ? '\u5fc5\u586b\u9009\u9879\uff01' : null,\n        children: <Switch style={{ maxWidth: 200 }} />,\n      },\n    }}\n  >\n    {({ fields, state, canSubmit }) => {\n      return (\n        <div>\n          <Row>\n            <Col>{fields.switch}</Col>\n          </Row>\n          <Row>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <pre style={{ padding: 10, marginTop: 10 }}>\n                {JSON.stringify(state.current, null, 2)}\n              </pre>\n            </Col>\n          </Row>\n        </div>\n      );\n    }}\n  </Form>\n);\n\nexport default Demo\n```\n\n### \u8bbe\u7f6e\u6587\u5b57\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch\n      data-checked=\"\u5f00\"\n      data-unchecked=\"\u5173\"\n      onChange={(e) => {\n        console.log('e', e.target.checked);\n      }}\n      style={{ marginRight: 10 }}\n    />\n  </div>\n);\nexport default Demo\n```\n\n\n### \u7981\u7528\u72b6\u6001\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch disabled checked style={{ marginRight: 10 }} />\n    <Switch disabled style={{ marginRight: 10 }} />\n    <Switch disabled data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo\n```\n\n### \u5c3a\u5bf8\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch size=\"large\" style={{ marginRight: 10 }} data-checked=\"\u5f00\" data-unchecked=\"\u5173\" />\n    <Switch size=\"large\" checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} data-checked=\"\u5f00\" data-unchecked=\"\u5173\" />\n    <Switch size=\"small\" data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nexport default Demo\n```\n\n### \u63a7\u5236\u7ec4\u4ef6\n\n\u901a\u8fc7 `checked` \u5c5e\u6027\u6539\u53d8 `Switch` \u7ec4\u4ef6\u72b6\u6001\u3002\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { Switch, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    }\n  }\n  onChange(e) {\n    console.log('~~~:::');\n    this.setState({ checked: e.target.checked });\n  }\n  render() {\n    return (\n      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n        <Switch onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />\n        <Button\n          size=\"small\"\n          type=\"primary\"\n          onClick={() => {\n            this.setState({ checked: !this.state.checked });\n          }}\n        >\n          \u70b9\u51fb\u6309\u94ae\u6539\u53d8 Switch \u72b6\u6001\n        </Button>\n      </div>\n    )\n  }\n}\nexport default Demo\n```\n\n## Switch \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | String/Number/Boolean | - |\n| name | \u7528\u4e8e\u8868\u5355\u5bf9\u5e94\u7684\u540d\u79f0 | String | - |\n| checked | \u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d | boolean | false |\n| disabled | \u662f\u5426\u7981\u7528 | boolean | false |\n| onChange | \u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570 | Function(e:Event) | - |\n| data-checked |  \u9009\u4e2d\u65f6\u7684\u5185\u5bb9 | string/ReactNode | - |\n| data-unchecked |  \u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9 | string/ReactNode | - |\n| size |  \u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a`large` `default` `small` | string | default |\n"}}}]);
//# sourceMappingURL=335.90a3533c.chunk.js.map