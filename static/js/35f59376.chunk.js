(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1097:function(t,n){t.exports='Tooltip 文字提示\n===\n\n简单的文字提示气泡框。\n\n```jsx\nimport { Tooltip } from \'uiw\';\n```\n\n### 基础用法\n\n最简单的用法。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tooltip placement="right" content="右边文字提示">\n      <Button>右边文字提示(right)</Button>\n    </Tooltip>\n    <Tooltip placement="top" content="上边文字提示">\n      <Button>上边文字提示(top)</Button>\n    </Tooltip>\n    <Tooltip placement="left" content="左边文字提示">\n      <Button>左边文字提示(left)</Button>\n    </Tooltip>\n    <Tooltip placement="bottom" content="下边文字提示">\n      <Button>下边文字提示(bottom)</Button>\n    </Tooltip>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 位置\n\n位置有 `12` 个方向，根据 `placement` 参数来设置。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button, Divider } from \'uiw\';\n\nconst btnStl = {position: \'relative\', width: 70 }\nconst Demo = () => (\n  <div>\n    <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">左边文字提示(left)</Button>\n    </Tooltip>\n\n    <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">上边文字提示(top)</Button>\n    </Tooltip>\n\n    <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">下边文字提示(bottom)</Button>\n    </Tooltip>\n\n    <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">右边文字提示(right)</Button>\n    </Tooltip>\n\n    <Divider />\n    <div style={{ position: \'relative\' }}>\n      <Tooltip placement="topLeft" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70 }}>TL</Button>\n      </Tooltip>\n      <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70}}>Top</Button>\n      </Tooltip>\n      <Tooltip placement="topRight" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70 }}>TR</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="leftTop" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl }}>LT</Button>\n      </Tooltip>\n      <Tooltip placement="rightTop" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>RT</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="left" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl }}>Left</Button>\n      </Tooltip>\n      <Tooltip placement="right" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>Right</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="leftBottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl }}>LB</Button>\n      </Tooltip>\n      <Tooltip placement="rightBottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>RB</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="bottomLeft" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>BL</Button>\n      </Tooltip>\n      <Tooltip placement="bottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>\n      </Tooltip>\n      <Tooltip placement="bottomRight" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>BR</Button>\n      </Tooltip>\n    </div>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 事件\n\n文字提示组件 `<Tooltip />`，通过设置属性 `trigger` 可以文字提示操作方式。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n\n    <Tooltip trigger="hover" placement="top" content="Hello uiw!">\n      <Button type="primary">悬浮弹出文字提示(top)</Button>\n    </Tooltip>\n    <Tooltip trigger="click" placement="top" content="Hello uiw!">\n      <Button type="success">点击弹出提示(top)</Button>\n    </Tooltip>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 文字提示框不显示箭头\n\n通过设置属性 `visibleArrow` 可以文字提示框不显示箭头。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n\n    <Tooltip visibleArrow={false} trigger="hover" placement="top" content="Hello uiw!">\n      <Button type="primary">悬浮弹出文字提示(top)</Button>\n    </Tooltip>\n    <Tooltip visibleArrow={false} trigger="click" placement="right" content="Hello uiw!">\n      <Button type="success">点击弹出提示(right)</Button>\n    </Tooltip>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 受控组件\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Switch, Divider } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isOpen: false,\n    }\n  }\n  onChange(e) {\n    this.setState({ isOpen: e.target.checked });\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  render() {\n    return (\n      <div>\n        <Tooltip\n          visible={this.state.isOpen}\n          onVisibleChange={this.onVisibleChange.bind(this)}\n          placement="top"\n          content="Hello uiw!"\n        >\n          <span>鼠标移动到此处，显示和消失触发事件，也可以通过 Switch 组件来控制</span>\n        </Tooltip>\n        <Divider />\n        <Switch checked={this.state.isOpen} onChange={this.onChange.bind(this)} />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| content | 显示的内容 | String,React.ReactNode | - |\n| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |\n| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `true` |\n| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效，继承 `<OverlayTrigger />` 组件属性 | Object/Number | - |\n| trigger | 悬停/点击弹出窗口，继承 `<OverlayTrigger />` 组件属性 | Enum{`hover`, `click`} | `hover` |\n| disabled | 是否禁用弹出目标 | Boolean | `false` |\n| isOpen | 默认是否显示弹窗，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |\n| autoAdjustOverflow | 弹出层被遮挡时自动调整位置，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |\n| onVisibleChange | 显示隐藏的回调，继承 `<OverlayTrigger />` 组件属性 | Function(isVisible:bool) | - |\n\n更多属性请参考 [OverlayTrigger](#/components/overlay-trigger)。\n'}}]);