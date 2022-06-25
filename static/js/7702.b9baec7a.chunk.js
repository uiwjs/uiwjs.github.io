"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7702],{7702:function(e,t,n){n.r(t),t.default={components:{20:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(2922);return function(){return t.default.createElement(r.Descriptions,{title:"\u7528\u6237\u4fe1\u606f"},t.default.createElement(r.Descriptions.Item,{label:"\u59d3\u540d"},"\u8c03\u8c03"),t.default.createElement(r.Descriptions.Item,{label:"\u624b\u673a\u53f7\u7801"},"1360000000"),t.default.createElement(r.Descriptions.Item,{label:"\u5c45\u4f4f\u5730"},"\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a"),t.default.createElement(r.Descriptions.Item,{label:"\u5907\u6ce8"},"-"),t.default.createElement(r.Descriptions.Item,{label:"\u5730\u5740"},"\u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7"))}}(),42:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(2922);return function(){return t.default.createElement(r.Descriptions,{title:"\u8be6\u7ec6\u4fe1\u606f",bordered:!0},t.default.createElement(r.Descriptions.Item,{label:"\u9879\u76ee"},"UI\u7ec4\u4ef6\u5e93"),t.default.createElement(r.Descriptions.Item,{label:"\u662f\u5426\u6536\u8d39"},"\u514d\u8d39"),t.default.createElement(r.Descriptions.Item,{label:"\u662f\u5426\u6301\u7eed\u7ef4\u62a4"},"\u662f"),t.default.createElement(r.Descriptions.Item,{label:"\u521b\u5efa\u65f6\u95f4"},"2018-04-24 18:00:00"),t.default.createElement(r.Descriptions.Item,{label:"\u66f4\u65b0\u65f6\u95f4",span:2},"2019-04-24 18:00:00"),t.default.createElement(r.Descriptions.Item,{label:"\u72b6\u6001",span:3},t.default.createElement(r.Badge,{color:"#008EF0",processing:!0}," \u6b63\u5728\u8fd0\u884c\u4e2d")),t.default.createElement(r.Descriptions.Item,{label:"\u5b9a\u5236\u7ec4\u4ef6"},"\uffe5280.00"),t.default.createElement(r.Descriptions.Item,{label:"\u8fdc\u7a0b\u534f\u52a9"},"\uffe520.00"),t.default.createElement(r.Descriptions.Item,{label:"\u4fee\u590dbug"},"\uffe560.00"),t.default.createElement(r.Descriptions.Item,{label:"\u8be6\u7ec6\u8bf4\u660e"},"\u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93",t.default.createElement("br",null),"\u5f53\u524d\u7248\u672c 3.4.1",t.default.createElement("br",null),"\u5f53\u524d react \u7248\u672c >= 16.7.0"))}}(),77:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,r=(t=n(8133))&&t.__esModule?t:{default:t},i=n(2922);function l(e,t){if(n=e,!(null!=(r=t)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}function o(t,n){if(n&&("object"===e(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}return function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(p,e);var t,n,o,c=a(p);function p(){var e;return l(this,p),(e=c.call(this)).state={value:"default"},e}return t=p,(n=[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(i.RadioGroup,{value:this.state.value,onChange:this.onChange.bind(this)},r.default.createElement(i.Radio,{value:"default"},"\u9ed8\u8ba4(default)"),r.default.createElement(i.Radio,{value:"large"},"\u5927\u5c3a\u5bf8(large)"),r.default.createElement(i.Radio,{value:"small"},"\u5c0f\u5c3a\u5bf8(small)")),r.default.createElement(i.Divider,null),r.default.createElement(i.Descriptions,{bordered:!0,title:"\u8be6\u7ec6\u4fe1\u606f",size:this.state.value},r.default.createElement(i.Descriptions.Item,{label:"\u9879\u76ee"},"UI\u7ec4\u4ef6\u5e93"),r.default.createElement(i.Descriptions.Item,{label:"\u662f\u5426\u6536\u8d39"},"\u514d\u8d39"),r.default.createElement(i.Descriptions.Item,{label:"\u662f\u5426\u6301\u7eed\u7ef4\u62a4"},"\u662f"),r.default.createElement(i.Descriptions.Item,{label:"\u521b\u5efa\u65f6\u95f4"},"2018-04-24 18:00:00"),r.default.createElement(i.Descriptions.Item,{label:"\u66f4\u65b0\u65f6\u95f4",span:2},"2019-04-24 18:00:00"),r.default.createElement(i.Descriptions.Item,{label:"\u72b6\u6001",span:3},r.default.createElement(i.Badge,{color:"#008EF0",processing:!0}," \u6b63\u5728\u8fd0\u884c\u4e2d")),r.default.createElement(i.Descriptions.Item,{label:"\u5b9a\u5236\u7ec4\u4ef6"},"\uffe5280.00"),r.default.createElement(i.Descriptions.Item,{label:"\u8fdc\u7a0b\u534f\u52a9"},"\uffe520.00"),r.default.createElement(i.Descriptions.Item,{label:"\u4fee\u590dbug"},"\uffe560.00"),r.default.createElement(i.Descriptions.Item,{label:"\u8be6\u7ec6\u8bf4\u660e"},"\u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93",r.default.createElement("br",null),"\u5f53\u524d\u7248\u672c 3.4.1",r.default.createElement("br",null),"\u5f53\u524d react \u7248\u672c >= 16.7.0")),r.default.createElement(i.Divider,null),r.default.createElement(i.Descriptions,{title:"\u81ea\u5b9a\u4e49\u5c3a\u5bf8",size:this.state.value},r.default.createElement(i.Descriptions.Item,{label:"\u59d3\u540d"},"\u8c03\u8c03"),r.default.createElement(i.Descriptions.Item,{label:"\u624b\u673a\u53f7\u7801"},"1360000000"),r.default.createElement(i.Descriptions.Item,{label:"\u5c45\u4f4f\u5730"},"\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a"),r.default.createElement(i.Descriptions.Item,{label:"\u5907\u6ce8"},"-"),r.default.createElement(i.Descriptions.Item,{label:"\u5730\u5740"},"\u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7")))}}])&&u(t.prototype,n),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),p}(r.default.Component)}(),145:function(){var e,t=(e=n(8133))&&e.__esModule?e:{default:e},r=n(2922);return function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement(r.Descriptions,{title:"\u5782\u76f4\u7684\u5217\u8868",layout:"vertical"},t.default.createElement(r.Descriptions.Item,{label:"\u59d3\u540d"},"\u8c03\u8c03"),t.default.createElement(r.Descriptions.Item,{label:"\u624b\u673a\u53f7\u7801"},"1360000000"),t.default.createElement(r.Descriptions.Item,{label:"\u5c45\u4f4f\u5730"},"\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a"),t.default.createElement(r.Descriptions.Item,{label:"\u5907\u6ce8"},"\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002"),t.default.createElement(r.Descriptions.Item,{label:"\u5730\u5740"},"\u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7")),t.default.createElement(r.Divider,null),t.default.createElement(r.Descriptions,{title:"\u5782\u76f4\u7684\u5217\u8868",layout:"vertical",bordered:!0},t.default.createElement(r.Descriptions.Item,{label:"\u59d3\u540d"},"\u8c03\u8c03"),t.default.createElement(r.Descriptions.Item,{label:"\u624b\u673a\u53f7\u7801"},"1360000000"),t.default.createElement(r.Descriptions.Item,{label:"\u5c45\u4f4f\u5730"},"\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a"),t.default.createElement(r.Descriptions.Item,{label:"\u5907\u6ce8"},"\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002"),t.default.createElement(r.Descriptions.Item,{label:"\u5730\u5740"},"\u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7")))}}()},data:{20:{name:20,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true",noScroll:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n    title: "\\u7528\\u6237\\u4FE1\\u606F"\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u59D3\\u540D"\n  }, "\\u8C03\\u8C03"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u624B\\u673A\\u53F7\\u7801"\n  }, "1360000000"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5C45\\u4F4F\\u5730"\n  }, "\\u4E0A\\u6D77\\u5E02\\uFF0C\\u9752\\u6D66\\u533A"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5907\\u6CE8"\n  }, "-"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5730\\u5740"\n  }, "\\u4E2D\\u56FD\\u6E56\\u5317\\u7701\\u9EC4\\u5188\\u5E02\\u7F57\\u7530\\u53BF666\\u53F7"));\n}\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Descriptions } from \'uiw\';\n\nfunction Demo() {\n  return <Descriptions title="\u7528\u6237\u4fe1\u606f">\n    <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n    <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n    <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n    <Descriptions.Item label="\u5907\u6ce8">-</Descriptions.Item>\n    <Descriptions.Item label="\u5730\u5740">\n      \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n    </Descriptions.Item>\n  </Descriptions>\n}\nexport default Demo'},42:{name:42,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true",noScroll:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n    title: "\\u8BE6\\u7EC6\\u4FE1\\u606F",\n    bordered: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u9879\\u76EE"\n  }, "UI\\u7EC4\\u4EF6\\u5E93"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u662F\\u5426\\u6536\\u8D39"\n  }, "\\u514D\\u8D39"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u662F\\u5426\\u6301\\u7EED\\u7EF4\\u62A4"\n  }, "\\u662F"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u521B\\u5EFA\\u65F6\\u95F4"\n  }, "2018-04-24 18:00:00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u66F4\\u65B0\\u65F6\\u95F4",\n    span: 2\n  }, "2019-04-24 18:00:00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u72B6\\u6001",\n    span: 3\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n    color: "#008EF0",\n    processing: true\n  }, " \\u6B63\\u5728\\u8FD0\\u884C\\u4E2D")), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5B9A\\u5236\\u7EC4\\u4EF6"\n  }, "\\uFFE5280.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u8FDC\\u7A0B\\u534F\\u52A9"\n  }, "\\uFFE520.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u4FEE\\u590Dbug"\n  }, "\\uFFE560.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u8BE6\\u7EC6\\u8BF4\\u660E"\n  }, "\\u4E94\\u5341\\u591A\\u4E2A\\u7EC4\\u4EF6\\u5E93", /*#__PURE__*/_react["default"].createElement("br", null), "\\u5F53\\u524D\\u7248\\u672C 3.4.1", /*#__PURE__*/_react["default"].createElement("br", null), "\\u5F53\\u524D react \\u7248\\u672C >= 16.7.0"));\n}\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Descriptions, Badge } from \'uiw\';\n\nfunction Demo() {\n  return <Descriptions title="\u8be6\u7ec6\u4fe1\u606f" bordered>\n    <Descriptions.Item label="\u9879\u76ee">UI\u7ec4\u4ef6\u5e93</Descriptions.Item>\n    <Descriptions.Item label="\u662f\u5426\u6536\u8d39">\u514d\u8d39</Descriptions.Item>\n    <Descriptions.Item label="\u662f\u5426\u6301\u7eed\u7ef4\u62a4">\u662f</Descriptions.Item>\n    <Descriptions.Item label="\u521b\u5efa\u65f6\u95f4">2018-04-24 18:00:00</Descriptions.Item>\n    <Descriptions.Item label="\u66f4\u65b0\u65f6\u95f4" span={2}>\n      2019-04-24 18:00:00\n    </Descriptions.Item>\n    <Descriptions.Item label="\u72b6\u6001" span={3}>\n      <Badge color="#008EF0" processing> \u6b63\u5728\u8fd0\u884c\u4e2d</Badge>\n    </Descriptions.Item>\n    <Descriptions.Item label="\u5b9a\u5236\u7ec4\u4ef6">\uffe5280.00</Descriptions.Item>\n    <Descriptions.Item label="\u8fdc\u7a0b\u534f\u52a9">\uffe520.00</Descriptions.Item>\n    <Descriptions.Item label="\u4fee\u590dbug">\uffe560.00</Descriptions.Item>\n    <Descriptions.Item label="\u8be6\u7ec6\u8bf4\u660e">\n      \u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93\n      <br />\n      \u5f53\u524d\u7248\u672c 3.4.1\n      <br />\n      \u5f53\u524d react \u7248\u672c >= 16.7.0\n    </Descriptions.Item>\n  </Descriptions>\n}\nexport default Demo'},77:{name:77,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true",noScroll:"true"},code:'"use strict";\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Demo = /*#__PURE__*/function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  var _super = _createSuper(Demo);\n\n  function Demo() {\n    var _this;\n\n    _classCallCheck(this, Demo);\n\n    _this = _super.call(this);\n    _this.state = {\n      value: \'default\'\n    };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: "onChange",\n    value: function onChange(e) {\n      this.setState({\n        value: e.target.value\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.RadioGroup, {\n        value: this.state.value,\n        onChange: this.onChange.bind(this)\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Radio, {\n        value: "default"\n      }, "\\u9ED8\\u8BA4(default)"), /*#__PURE__*/_react["default"].createElement(_uiw.Radio, {\n        value: "large"\n      }, "\\u5927\\u5C3A\\u5BF8(large)"), /*#__PURE__*/_react["default"].createElement(_uiw.Radio, {\n        value: "small"\n      }, "\\u5C0F\\u5C3A\\u5BF8(small)")), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n        bordered: true,\n        title: "\\u8BE6\\u7EC6\\u4FE1\\u606F",\n        size: this.state.value\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u9879\\u76EE"\n      }, "UI\\u7EC4\\u4EF6\\u5E93"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u662F\\u5426\\u6536\\u8D39"\n      }, "\\u514D\\u8D39"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u662F\\u5426\\u6301\\u7EED\\u7EF4\\u62A4"\n      }, "\\u662F"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u521B\\u5EFA\\u65F6\\u95F4"\n      }, "2018-04-24 18:00:00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u66F4\\u65B0\\u65F6\\u95F4",\n        span: 2\n      }, "2019-04-24 18:00:00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u72B6\\u6001",\n        span: 3\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Badge, {\n        color: "#008EF0",\n        processing: true\n      }, " \\u6B63\\u5728\\u8FD0\\u884C\\u4E2D")), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u5B9A\\u5236\\u7EC4\\u4EF6"\n      }, "\\uFFE5280.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u8FDC\\u7A0B\\u534F\\u52A9"\n      }, "\\uFFE520.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u4FEE\\u590Dbug"\n      }, "\\uFFE560.00"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u8BE6\\u7EC6\\u8BF4\\u660E"\n      }, "\\u4E94\\u5341\\u591A\\u4E2A\\u7EC4\\u4EF6\\u5E93", /*#__PURE__*/_react["default"].createElement("br", null), "\\u5F53\\u524D\\u7248\\u672C 3.4.1", /*#__PURE__*/_react["default"].createElement("br", null), "\\u5F53\\u524D react \\u7248\\u672C >= 16.7.0")), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n        title: "\\u81EA\\u5B9A\\u4E49\\u5C3A\\u5BF8",\n        size: this.state.value\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u59D3\\u540D"\n      }, "\\u8C03\\u8C03"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u624B\\u673A\\u53F7\\u7801"\n      }, "1360000000"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u5C45\\u4F4F\\u5730"\n      }, "\\u4E0A\\u6D77\\u5E02\\uFF0C\\u9752\\u6D66\\u533A"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u5907\\u6CE8"\n      }, "-"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n        label: "\\u5730\\u5740"\n      }, "\\u4E2D\\u56FD\\u6E56\\u5317\\u7701\\u9EC4\\u5188\\u5E02\\u7F57\\u7530\\u53BF666\\u53F7")));\n    }\n  }]);\n\n  return Demo;\n}(_react["default"].Component);\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Descriptions, Divider, Radio, RadioGroup, Badge } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      value: \'default\',\n    }\n  }\n  onChange(e) {\n    this.setState({\n      value: e.target.value,\n    });\n  }\n  render() {\n    return (\n      <div>\n        <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>\n          <Radio value="default">\u9ed8\u8ba4(default)</Radio>\n          <Radio value="large">\u5927\u5c3a\u5bf8(large)</Radio>\n          <Radio value="small">\u5c0f\u5c3a\u5bf8(small)</Radio>\n        </RadioGroup>\n        <Divider />\n        <Descriptions bordered title="\u8be6\u7ec6\u4fe1\u606f"  size={this.state.value}>\n          <Descriptions.Item label="\u9879\u76ee">UI\u7ec4\u4ef6\u5e93</Descriptions.Item>\n          <Descriptions.Item label="\u662f\u5426\u6536\u8d39">\u514d\u8d39</Descriptions.Item>\n          <Descriptions.Item label="\u662f\u5426\u6301\u7eed\u7ef4\u62a4">\u662f</Descriptions.Item>\n          <Descriptions.Item label="\u521b\u5efa\u65f6\u95f4">2018-04-24 18:00:00</Descriptions.Item>\n          <Descriptions.Item label="\u66f4\u65b0\u65f6\u95f4" span={2}>\n            2019-04-24 18:00:00\n          </Descriptions.Item>\n          <Descriptions.Item label="\u72b6\u6001" span={3}>\n            <Badge color="#008EF0" processing> \u6b63\u5728\u8fd0\u884c\u4e2d</Badge>\n          </Descriptions.Item>\n          <Descriptions.Item label="\u5b9a\u5236\u7ec4\u4ef6">\uffe5280.00</Descriptions.Item>\n          <Descriptions.Item label="\u8fdc\u7a0b\u534f\u52a9">\uffe520.00</Descriptions.Item>\n          <Descriptions.Item label="\u4fee\u590dbug">\uffe560.00</Descriptions.Item>\n          <Descriptions.Item label="\u8be6\u7ec6\u8bf4\u660e">\n            \u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93\n            <br />\n            \u5f53\u524d\u7248\u672c 3.4.1\n            <br />\n            \u5f53\u524d react \u7248\u672c >= 16.7.0\n          </Descriptions.Item>\n        </Descriptions>\n        <Divider />\n        <Descriptions title="\u81ea\u5b9a\u4e49\u5c3a\u5bf8"  size={this.state.value}>\n          <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n          <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n          <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n          <Descriptions.Item label="\u5907\u6ce8">-</Descriptions.Item>\n          <Descriptions.Item label="\u5730\u5740">\n            \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n          </Descriptions.Item>\n        </Descriptions>\n      </div>\n    )\n  }\n}\nexport default Demo'},145:{name:145,meta:{bgWhite:"true",codeSandbox:"true",codePen:"true",noScroll:"true"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n    title: "\\u5782\\u76F4\\u7684\\u5217\\u8868",\n    layout: "vertical"\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u59D3\\u540D"\n  }, "\\u8C03\\u8C03"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u624B\\u673A\\u53F7\\u7801"\n  }, "1360000000"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5C45\\u4F4F\\u5730"\n  }, "\\u4E0A\\u6D77\\u5E02\\uFF0C\\u9752\\u6D66\\u533A"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5907\\u6CE8"\n  }, "\\u5782\\u76F4\\u5217\\u8868\\u8BBE\\u7F6E layout \\u503C\\u4E3A vertical\\u3002"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5730\\u5740"\n  }, "\\u4E2D\\u56FD\\u6E56\\u5317\\u7701\\u9EC4\\u5188\\u5E02\\u7F57\\u7530\\u53BF666\\u53F7")), /*#__PURE__*/_react["default"].createElement(_uiw.Divider, null), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions, {\n    title: "\\u5782\\u76F4\\u7684\\u5217\\u8868",\n    layout: "vertical",\n    bordered: true\n  }, /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u59D3\\u540D"\n  }, "\\u8C03\\u8C03"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u624B\\u673A\\u53F7\\u7801"\n  }, "1360000000"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5C45\\u4F4F\\u5730"\n  }, "\\u4E0A\\u6D77\\u5E02\\uFF0C\\u9752\\u6D66\\u533A"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5907\\u6CE8"\n  }, "\\u5782\\u76F4\\u5217\\u8868\\u8BBE\\u7F6E layout \\u503C\\u4E3A vertical\\u3002"), /*#__PURE__*/_react["default"].createElement(_uiw.Descriptions.Item, {\n    label: "\\u5730\\u5740"\n  }, "\\u4E2D\\u56FD\\u6E56\\u5317\\u7701\\u9EC4\\u5188\\u5E02\\u7F57\\u7530\\u53BF666\\u53F7")));\n}\n\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Descriptions, Divider } from \'uiw\';\n\nfunction Demo() {\n  return <>\n    <Descriptions title="\u5782\u76f4\u7684\u5217\u8868" layout="vertical">\n      <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n      <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n      <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n      <Descriptions.Item label="\u5907\u6ce8">\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002</Descriptions.Item>\n      <Descriptions.Item label="\u5730\u5740">\n        \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n      </Descriptions.Item>\n    </Descriptions>\n    <Divider />\n    <Descriptions title="\u5782\u76f4\u7684\u5217\u8868" layout="vertical" bordered>\n      <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n      <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n      <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n      <Descriptions.Item label="\u5907\u6ce8">\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002</Descriptions.Item>\n      <Descriptions.Item label="\u5730\u5740">\n        \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n      </Descriptions.Item>\n    </Descriptions>\n  </>\n}\nexport default Demo'}},source:'Descriptions \u63cf\u8ff0\u5217\u8868\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-descriptions/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-descriptions.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-descriptions)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-descriptions.svg?label=@uiw/react-descriptions)](https://npmjs.com/@uiw/react-descriptions)\n\n\u6210\u7ec4\u5c55\u793a\u591a\u4e2a\u53ea\u8bfb\u5b57\u6bb5\u3002\n\n```jsx\nimport { Descriptions } from \'uiw\';\n// or\nimport Descriptions from \'@uiw/react-descriptions\';\n```\n\n## \u57fa\u7840\u7528\u6cd5\n\n\u7b80\u5355\u7684\u5c55\u793a\u3002\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true&noScroll=true\nimport React from \'react\';\nimport { Descriptions } from \'uiw\';\n\nfunction Demo() {\n  return <Descriptions title="\u7528\u6237\u4fe1\u606f">\n    <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n    <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n    <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n    <Descriptions.Item label="\u5907\u6ce8">-</Descriptions.Item>\n    <Descriptions.Item label="\u5730\u5740">\n      \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n    </Descriptions.Item>\n  </Descriptions>\n}\nexport default Demo\n```\n\n## \u5e26\u8fb9\u6846\u7684\n\n\u5e26\u8fb9\u6846\u548c\u80cc\u666f\u989c\u8272\u5217\u8868\u3002\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true&noScroll=true\nimport React from \'react\';\nimport { Descriptions, Badge } from \'uiw\';\n\nfunction Demo() {\n  return <Descriptions title="\u8be6\u7ec6\u4fe1\u606f" bordered>\n    <Descriptions.Item label="\u9879\u76ee">UI\u7ec4\u4ef6\u5e93</Descriptions.Item>\n    <Descriptions.Item label="\u662f\u5426\u6536\u8d39">\u514d\u8d39</Descriptions.Item>\n    <Descriptions.Item label="\u662f\u5426\u6301\u7eed\u7ef4\u62a4">\u662f</Descriptions.Item>\n    <Descriptions.Item label="\u521b\u5efa\u65f6\u95f4">2018-04-24 18:00:00</Descriptions.Item>\n    <Descriptions.Item label="\u66f4\u65b0\u65f6\u95f4" span={2}>\n      2019-04-24 18:00:00\n    </Descriptions.Item>\n    <Descriptions.Item label="\u72b6\u6001" span={3}>\n      <Badge color="#008EF0" processing> \u6b63\u5728\u8fd0\u884c\u4e2d</Badge>\n    </Descriptions.Item>\n    <Descriptions.Item label="\u5b9a\u5236\u7ec4\u4ef6">\uffe5280.00</Descriptions.Item>\n    <Descriptions.Item label="\u8fdc\u7a0b\u534f\u52a9">\uffe520.00</Descriptions.Item>\n    <Descriptions.Item label="\u4fee\u590dbug">\uffe560.00</Descriptions.Item>\n    <Descriptions.Item label="\u8be6\u7ec6\u8bf4\u660e">\n      \u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93\n      <br />\n      \u5f53\u524d\u7248\u672c 3.4.1\n      <br />\n      \u5f53\u524d react \u7248\u672c >= 16.7.0\n    </Descriptions.Item>\n  </Descriptions>\n}\nexport default Demo\n```\n\n## \u81ea\u5b9a\u4e49\u5c3a\u5bf8\n\n\u81ea\u5b9a\u4e49\u5c3a\u5bf8\uff0c\u9002\u5e94\u5728\u5404\u79cd\u5bb9\u5668\u4e2d\u5c55\u793a\u3002\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true&noScroll=true\nimport React from \'react\';\nimport { Descriptions, Divider, Radio, RadioGroup, Badge } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      value: \'default\',\n    }\n  }\n  onChange(e) {\n    this.setState({\n      value: e.target.value,\n    });\n  }\n  render() {\n    return (\n      <div>\n        <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>\n          <Radio value="default">\u9ed8\u8ba4(default)</Radio>\n          <Radio value="large">\u5927\u5c3a\u5bf8(large)</Radio>\n          <Radio value="small">\u5c0f\u5c3a\u5bf8(small)</Radio>\n        </RadioGroup>\n        <Divider />\n        <Descriptions bordered title="\u8be6\u7ec6\u4fe1\u606f"  size={this.state.value}>\n          <Descriptions.Item label="\u9879\u76ee">UI\u7ec4\u4ef6\u5e93</Descriptions.Item>\n          <Descriptions.Item label="\u662f\u5426\u6536\u8d39">\u514d\u8d39</Descriptions.Item>\n          <Descriptions.Item label="\u662f\u5426\u6301\u7eed\u7ef4\u62a4">\u662f</Descriptions.Item>\n          <Descriptions.Item label="\u521b\u5efa\u65f6\u95f4">2018-04-24 18:00:00</Descriptions.Item>\n          <Descriptions.Item label="\u66f4\u65b0\u65f6\u95f4" span={2}>\n            2019-04-24 18:00:00\n          </Descriptions.Item>\n          <Descriptions.Item label="\u72b6\u6001" span={3}>\n            <Badge color="#008EF0" processing> \u6b63\u5728\u8fd0\u884c\u4e2d</Badge>\n          </Descriptions.Item>\n          <Descriptions.Item label="\u5b9a\u5236\u7ec4\u4ef6">\uffe5280.00</Descriptions.Item>\n          <Descriptions.Item label="\u8fdc\u7a0b\u534f\u52a9">\uffe520.00</Descriptions.Item>\n          <Descriptions.Item label="\u4fee\u590dbug">\uffe560.00</Descriptions.Item>\n          <Descriptions.Item label="\u8be6\u7ec6\u8bf4\u660e">\n            \u4e94\u5341\u591a\u4e2a\u7ec4\u4ef6\u5e93\n            <br />\n            \u5f53\u524d\u7248\u672c 3.4.1\n            <br />\n            \u5f53\u524d react \u7248\u672c >= 16.7.0\n          </Descriptions.Item>\n        </Descriptions>\n        <Divider />\n        <Descriptions title="\u81ea\u5b9a\u4e49\u5c3a\u5bf8"  size={this.state.value}>\n          <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n          <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n          <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n          <Descriptions.Item label="\u5907\u6ce8">-</Descriptions.Item>\n          <Descriptions.Item label="\u5730\u5740">\n            \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n          </Descriptions.Item>\n        </Descriptions>\n      </div>\n    )\n  }\n}\nexport default Demo\n```\n\n## \u5782\u76f4\n\n\u5782\u76f4\u7684\u5217\u8868\u3002\n\n```jsx mdx:preview&bgWhite=true&codeSandbox=true&codePen=true&noScroll=true\nimport React from \'react\';\nimport { Descriptions, Divider } from \'uiw\';\n\nfunction Demo() {\n  return <>\n    <Descriptions title="\u5782\u76f4\u7684\u5217\u8868" layout="vertical">\n      <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n      <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n      <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n      <Descriptions.Item label="\u5907\u6ce8">\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002</Descriptions.Item>\n      <Descriptions.Item label="\u5730\u5740">\n        \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n      </Descriptions.Item>\n    </Descriptions>\n    <Divider />\n    <Descriptions title="\u5782\u76f4\u7684\u5217\u8868" layout="vertical" bordered>\n      <Descriptions.Item label="\u59d3\u540d">\u8c03\u8c03</Descriptions.Item>\n      <Descriptions.Item label="\u624b\u673a\u53f7\u7801">1360000000</Descriptions.Item>\n      <Descriptions.Item label="\u5c45\u4f4f\u5730">\u4e0a\u6d77\u5e02\uff0c\u9752\u6d66\u533a</Descriptions.Item>\n      <Descriptions.Item label="\u5907\u6ce8">\u5782\u76f4\u5217\u8868\u8bbe\u7f6e layout \u503c\u4e3a vertical\u3002</Descriptions.Item>\n      <Descriptions.Item label="\u5730\u5740">\n        \u4e2d\u56fd\u6e56\u5317\u7701\u9ec4\u5188\u5e02\u7f57\u7530\u53bf666\u53f7\n      </Descriptions.Item>\n    </Descriptions>\n  </>\n}\nexport default Demo\n```\n\n## Props\n\n### Descriptions\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ---- | ---- | ---- | ---- |\n| title | \u6807\u9898 | ReactNode | - |\n| bordered | \u662f\u5426\u5c55\u793a\u8fb9\u6846 | boolean | `false` |\n| colon | \u7c7b\u5bb9\u8868\u8ff0 `label` \u6dfb\u52a0 `:` \u5192\u53f7 | boolean | `true` |\n| size | \u8bbe\u7f6e\u5217\u8868\u7684\u5927\u5c0f\u3002\u8bbe\u7f6e `bordered={ture}` \u751f\u6548\u3002 | `large`, `small`, `default` | `default` |\n| layout | \u63cf\u8ff0\u5e03\u5c40 | `horizontal`, `vertical` | `horizontal` |\n| column | \u4e00\u884c\u7684 `DescriptionItems` \u6570\u91cf | Number | 3 |\n\n### Descriptions.Item\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ---- | ---- | ---- | ---- |\n| label | \u5185\u5bb9\u7684\u63cf\u8ff0 | ReactNode | - |\n| span | \u5305\u542b\u5217\u7684\u6570\u91cf | Number | 1 |'}}}]);
//# sourceMappingURL=7702.b9baec7a.chunk.js.map