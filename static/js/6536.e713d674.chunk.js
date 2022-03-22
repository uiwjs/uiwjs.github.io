"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6536],{36536:function(n,t,e){e.r(t),t.default='Popover \u6c14\u6ce1\u5361\u7247\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-popover/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-popover.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-popover)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-popover.svg?label=@uiw/react-popover)](https://npmjs.com/@uiw/react-popover)\n\n\u70b9\u51fb/\u9f20\u6807\u79fb\u5165\u5143\u7d20\uff0c\u5f39\u51fa\u6c14\u6ce1\u5f0f\u7684\u5361\u7247\u6d6e\u5c42\u3002\n\n```jsx\nimport { Popover } from \'uiw\';\n// or\nimport Popover from \'@uiw/react-popover\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { Popover, Card, Icon,Row,Col, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      isOpen: false,\n      isOpen1: false,\n    }\n  }\n  onClick(field) {\n    this.setState({ [field]: false });\n  }\n\n  handleVisibleChange(field, isOpen) {\n    this.setState({ [field]:isOpen });\n  }\n  render() {\n    return (\n      <Row style={{ alignItems: \'center\' }}>\n        <Popover\n          trigger="click"\n          placement="top"\n          isOpen={this.state.isOpen}\n          onVisibleChange={this.handleVisibleChange.bind(this, \'isOpen\')}\n          content={\n            <Card bordered={false} title="Card\u6807\u9898" extra={<a href="#">\u66f4\u591a</a>} style={{ width: 200 }}>\n              <div>Are you sure you want to delete these items? You won\'t be able to recover them.</div>\n              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>\n                <Button size="small" onClick={this.onClick.bind(this, \'isOpen\')}>\n                  Cancel\n                </Button>\n                <Button type="danger" size="small" onClick={this.onClick.bind(this, \'isOpen\')}>\n                  Delete\n                </Button>\n              </div>\n            </Card>\n          }\n        >\n          <Button active={this.state.isOpen}>\u5f39\u51fa\u76ee\u6807</Button>\n        </Popover>\n        <div style={{ marginLeft: 20 }}>\n          <Popover\n            trigger="click"\n            placement="top"\n            isOpen={this.state.isOpen1}\n            onVisibleChange={this.handleVisibleChange.bind(this, \'isOpen1\')}\n            content={\n              <Card bordered={false} title="Card\u6807\u9898" extra={<a href="#">\u66f4\u591a</a>} style={{ width: 200 }}>\n                <div>Are you sure you want to delete these items? You won\'t be able to recover them.</div>\n                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>\n                  <Button size="small" onClick={this.onClick.bind(this, \'isOpen1\')}>\n                    Cancel\n                  </Button>\n                  <Button type="danger" size="small" onClick={this.onClick.bind(this, \'isOpen1\')}>\n                    Delete\n                  </Button>\n                </div>\n              </Card>\n            }\n          >\n            <Icon type="setting" color="#343a40" style={{ fontSize: 20 }} />\n          </Popover>\n        </div>\n      </Row>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f4d\u7f6e\n\n\u4f4d\u7f6e\u6709 `12` \u4e2a\u65b9\u5411\uff0c\u6839\u636e `placement` \u53c2\u6570\u6765\u8bbe\u7f6e\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from \'react-dom\';\nimport { Popover, Card, Button } from \'uiw\';\n\nconst btnStl = {position: \'relative\', width: 70 }\nconst content = (\n  <Card bordered={false} style={{ width: 120 }}>\n    <div>Are you sure you want to delete these items? You won\'t be able to recover them.</div>\n  </Card>\n)\nconst Demo = () => (\n  <div>\n    <div style={{ position: \'relative\' }}>\n\n      <Popover trigger="click" placement="topLeft" content={content}>\n        <Button style={{ ...btnStl, left: 70 }}>TL</Button>\n      </Popover>\n      <Popover trigger="click" placement="top" content={content}>\n        <Button style={{ ...btnStl, left: 70}}>Top</Button>\n      </Popover>\n      <Popover trigger="click" placement="topRight" content={content}>\n        <Button style={{ ...btnStl, left: 70 }}>TR</Button>\n      </Popover>\n\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n\n      <Popover trigger="click" placement="leftTop" content={content}>\n        <Button style={{ ...btnStl }}>LT</Button>\n      </Popover>\n      <Popover trigger="click" placement="rightTop" content={content}>\n        <Button style={{ ...btnStl, left: 216 }}>RT</Button>\n      </Popover>\n\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n\n      <Popover trigger="click" placement="left" content={content}>\n        <Button style={{ ...btnStl }}>Left</Button>\n      </Popover>\n      <Popover trigger="click" placement="right" content={content}>\n        <Button style={{ ...btnStl, left: 216 }}>Right</Button>\n      </Popover>\n\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n\n      <Popover trigger="click" placement="leftBottom" content={content}>\n        <Button style={{ ...btnStl }}>LB</Button>\n      </Popover>\n      <Popover trigger="click" placement="rightBottom" content={content}>\n        <Button style={{ ...btnStl, left: 216 }}>RB</Button>\n      </Popover>\n\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n\n      <Popover trigger="click" placement="bottomLeft" content={content}>\n        <Button style={{ ...btnStl, left: 70 }}>BL</Button>\n      </Popover>\n      <Popover trigger="click" placement="bottom" content={content}>\n        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>\n      </Popover>\n      <Popover trigger="click" placement="bottomRight" content={content}>\n        <Button style={{ ...btnStl, left: 70 }}>BR</Button>\n      </Popover>\n\n    </div>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u9f20\u6807\u7ecf\u8fc7\u5f39\u51fa\u76ee\u6807\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from \'react-dom\';\nimport { Popover, Card, Button } from \'uiw\';\n\nconst btnStl = {position: \'relative\', width: 70 }\nconst content = (\n  <Card\n    style={{ width: 220 }}\n    bordered={false}\n    title="Card\u6807\u9898"\n    footer={\n      <span>\u8fd9\u91cc\u662f\u9875\u811a</span>\n    }\n  >\n    <div>\u8fd9\u662f\u4f60\u9f20\u6807\u7ecf\u8fc7\u5f39\u51fa\u7684\u76ee\u6807\u3002</div>\n  </Card>\n)\nconst Demo = () => (\n  <div>\n    <Popover trigger="hover" placement="top" content={content}>\n      <Button>\u9f20\u6807\u7ecf\u8fc7\u5f39\u51fa\u76ee\u6807</Button>\n    </Popover>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7126\u70b9\u5c55\u793a\n\n\u901a\u8fc7\u8bbe\u7f6e `trigger="focus"` \u8ba9 `Input` \u7ec4\u4ef6\u5728\u83b7\u53d6\u7126\u70b9\u7684\u65f6\u5019\u5c55\u793a `Popover`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { Popover, Card, Button, Input } from \'uiw\';\n\nconst btnStl = {position: \'relative\', width: 70 }\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      isOpen: false,\n      value: \'\',\n    }\n  }\n  onClick(val) {\n    const state = { isOpen: false }\n    if (val) {\n      state.value = val;\n    }\n    if (val === null) state.value = \'\';\n    this.setState({ ...state });\n  }\n  handleVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  onChange(e) {\n    this.setState({ value: e.target.value });\n  }\n  renderPopup() {\n    return (\n      <Card\n        style={{ width: 220 }}\n        bordered={false}\n        footer={\n          <div style={{ display: "flex", justifyContent: "flex-end" }}>\n            <Button size="small" onClick={this.onClick.bind(this, undefined)}>\n              \u53d6\u6d88\n            </Button>\n            <Button size="small" onClick={this.onClick.bind(this, null)}>\n              \u6e05\u7a7a\n            </Button>\n            <Button type="success" size="small" onClick={this.onClick.bind(this, \'\u8fd9\u662f\u5411 Input \u8f93\u5165\u6846\u63d2\u5165\u7684\u5185\u5bb9\')}>\n              \u63d2\u5165\u5185\u5bb9\n            </Button>\n          </div>\n        }\n      >\n        <div>\u901a\u8fc7\u8bbe\u7f6e `trigger="focus"` \u8ba9 `Input` \u7ec4\u4ef6\u5728\u83b7\u53d6\u7126\u70b9\u7684\u65f6\u5019\u5c55\u793a `Popover`</div>\n      </Card>\n    )\n  }\n  render() {\n    return (\n      <div>\n        <div style={{ width: 200 }}>\n          <Popover\n            trigger="focus"\n            placement="top"\n            isOpen={this.state.isOpen}\n            onVisibleChange={this.handleVisibleChange.bind(this)}\n            content={this.renderPopup()}\n          >\n            <Input placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" value={this.state.value} onChange={this.onChange.bind(this)}/>\n          </Popover>\n        </div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### usePortal\n\n\u8bbe\u7f6e `usePortal={false}` \u5c06\u6a21\u6001\u5bf9\u8bdd\u6846\u751f\u6210\u5230\u6839\u8282\u70b9\u7684\u91cc\u9762\uff0c\u8fd9\u6837\u4e3a\u4e86\u8ba1\u7b97\u4f4d\u7f6e\u51c6\u786e\uff0c\u4f60\u9700\u8981\u5c06\u7236\u5c42\u6837\u5f0f\u8bbe\u4e3a `position: relative;` \u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { Popover, Card, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      isOpen: false,\n    }\n  }\n  onClick() {\n    this.setState({ isOpen: false });\n  }\n  handleVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  render() {\n    return (\n      <div>\n        <div style={{ position: \'relative\' }}>\n          <Popover\n            trigger="click"\n            placement="right"\n            usePortal={false}\n            isOpen={this.state.isOpen}\n            onVisibleChange={this.handleVisibleChange.bind(this)}\n            content={\n              <Card bordered={false} title="Card\u6807\u9898" extra={<a href="#">\u66f4\u591a</a>} style={{ width: 200 }}>\n                <div>Are you sure you want to delete these items? You won\'t be able to recover them.</div>\n                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>\n                  <Button size="small" onClick={this.onClick.bind(this)}>\n                    Cancel\n                  </Button>\n                  <Button type="danger" size="small" onClick={this.onClick.bind(this)}>\n                    Delete\n                  </Button>\n                </div>\n              </Card>\n            }\n          >\n            <Button>\u5f39\u51fa\u76ee\u6807</Button>\n          </Popover>\n        </div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| content | \u663e\u793a\u7684\u5185\u5bb9 | String,React.ReactNode | - |\n| placement | \u6c14\u6ce1\u6846\u4f4d\u7f6e\uff0c\u53ef\u73b0\u5b9e\u7bad\u5934\u5728\u4e0d\u540c\u7684\u65b9\u4f4d | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |\n| visibleArrow | \u662f\u5426\u663e\u793a\u7bad\u5934 | Boolean | `true` |\n| delay | \u5ef6\u8fdf\u8fdb\u5165\u548c\u6d88\u5931\uff0c`{ show: 2000, hide: 4000 }` \u6216\u8005\u76f4\u63a5\u8bbe\u7f6e `2000`\uff0c\u53ea\u5bf9 `trigger=hover` \u6709\u6548\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Object/Number | - |\n| trigger| \u60ac\u505c/\u70b9\u51fb\u5f39\u51fa\u7a97\u53e3\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Enum{`hover`, `click`, `focus`} | `hover` |\n| disabled | \u662f\u5426\u7981\u7528\u5f39\u51fa\u76ee\u6807 | Boolean | `false` |\n| isOpen | \u9ed8\u8ba4\u662f\u5426\u663e\u793a\u5f39\u7a97\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Boolean | `false` |\n| autoAdjustOverflow | \u5f39\u51fa\u5c42\u88ab\u906e\u6321\u65f6\u81ea\u52a8\u8c03\u6574\u4f4d\u7f6e\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Boolean | `false` |\n| onVisibleChange | \u663e\u793a\u9690\u85cf\u7684\u56de\u8c03\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Function(isVisible:bool) | - |\n\n\u66f4\u591a\u5c5e\u6027\u8bf7\u53c2\u8003 [OverlayTrigger](#/components/overlay-trigger)\u3002\n'}}]);
//# sourceMappingURL=6536.e713d674.chunk.js.map