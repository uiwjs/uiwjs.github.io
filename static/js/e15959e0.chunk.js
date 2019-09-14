(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{1091:function(n,e){n.exports="Split 面板分割\n===\n\n可将一块内容，分割为可以拖拽调整宽度或高度的区域。\n\n```jsx\nimport { Split } from 'uiw';\n```\n\n### 基础用法\n\n~~通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。通过设置子节点样式 `flexBasis` 样式即可设置默认分割内容的占比宽度。~~\n\n- 固定初始宽度或者高度，可通过设置子节点，样式 `width: '80%'` 宽度百分百来计算。\n- 拖拽至最小宽度，可通过设置子节点样式 `minWidth: 30`，来达到效果\n- 默认情况下，不设置样式 `width`，需要将某个子节点样式设为 `flex: 1`，来自适应\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ width: '20%', minWidth: 30 }}>\n        <iframe\n          srcDoc=\"<div>test</div>\"\n          style={{ width: '100%', height: '100%' }}\n          title=\"Code Preview\"\n          sandbox=\"allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts\"\n        />\n      </div>\n      <div style={{ width: '80%' }}>\n        Right Pane\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 可用于布局\n\n设置 `visiable={false}` 禁用拖拽栏，可用于布局。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split, Divider } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Split mode=\"vertical\" visiable={false}>\n      <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n        Header\n      </div>\n      <Split visiable={false}>\n        <div style={{ minWidth: 200, maxWidth: 200, minHeight: 120, background: '#b5b5b5' }}>\n          Sider\n        </div>\n        <div style={{ width: '100%', background: '#ececec' }}>\n          Content\n        </div>\n      </Split>\n      <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n        Footer\n      </div>\n    </Split>\n    <Divider />\n    <Split visiable={false}>\n      <div style={{ minWidth: 200, maxWidth: 200, minHeight: 85, background: '#a9a9a9' }}>\n        Sider\n      </div>\n      <Split mode=\"vertical\" visiable={false} style={{ width: '100%' }}>\n        <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n          Header\n        </div>\n        <div style={{ minHeight: 85, background: '#b5b5b5' }}>\n          Content\n        </div>\n        <div style={{ minHeight: 45, background: '#dcdcdc' }}>\n          Footer\n        </div>\n      </Split>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 多栏分割\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ minWidth: 20, maxWidth: 30 }}>\n      Left Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div style={{ flex: 1 }}>\n      Right Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 线条拖拽\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Split lineBar style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div>\n        Left Pane\n      </div>\n      <div>\n        Center Pane\n      </div>\n      <div>\n        Center Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split mode=\"vertical\" lineBar style={{ height: 210, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ height: '33.3%' }}>\n        Left Pane\n      </div>\n      <div style={{ height: '33.3%' }}>\n        Center Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 垂直分割\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <Split mode=\"vertical\" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ height: '50%' }}>\n      Top Pane\n    </div>\n    <div style={{ height: '50%' }}>\n      Bottom Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 嵌套使用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <Split mode=\"vertical\">\n      <div style={{ height: '50%' }}>\n        Top Pane\n      </div>\n      <Split style={{ height: '50%' }}>\n        <div>\n          Left Pane\n        </div>\n        <div>\n          Right Pane\n        </div>\n      </Split>\n    </Split>\n    <div style={{ flex: 1 }}>\n      Right Pane\n    </div>\n  </Split>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 拖拽工具不显示\n\n下面实例通过设置 `visiable` 的值来设置拖拽工具是否可见\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split visiable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div style={{ flex: 1 }}>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 禁用拖拽\n\n通过设置 `disable` 的值，禁用拖拽工具拖拽。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Split disable style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>\n        Left Pane\n      </div>\n      <Split disable mode=\"vertical\">\n        <div>\n          Top Pane\n        </div>\n        <div>\n          Bottom Pane\n        </div>\n      </Split>\n      <div style={{ flex: 1 }}>\n        Right Pane\n      </div>\n    </Split>\n    <Split disable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>\n      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>\n        Pane 1\n      </div>\n      <div style={{ maxWidth: 60 }}>\n        Pane 2\n      </div>\n      <div>\n        Pane 3\n      </div>\n      <div>\n        Pane 4\n      </div>\n      <div style={{ flex: 1 }}>\n        Pane 5\n      </div>\n    </Split>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 抽屉\n\n可拖拽左边栏宽度。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Split, Menu, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      width: 210,\n    };\n  }\n  onClick() {\n    this.setState({\n      width: this.state.width === 0 ? 210 : 0,\n    });\n  }\n  render() {\n    const styl = {};\n    if (this.state.width === 0) {\n      styl.width = `0%`;\n    } else {\n      styl.width = this.state.width;\n    }\n    return (\n      <>\n        <div style={{ marginBottom: 10 }}>\n          <Button type=\"primary\" onClick={this.onClick.bind(this)}>{this.state.width === 0 ? '隐藏菜单' : '展示菜单'}</Button>\n        </div>\n        <Split lineBar visiable={this.state.width !== 0} style={{ border: '1px solid #d5d5d5', borderRadius: 3 }}>\n          <div style={{ ...styl, overflow: 'hidden' }}>\n            <Menu>\n              <Menu.Item icon=\"heart-on\" text=\"另存为\" active />\n              <Menu.Item icon=\"appstore\" text=\"应用商城\" />\n              <Menu.Item icon=\"bar-chart\" text=\"月统计报表导出\" />\n              <Menu.Item icon=\"setting\" text=\"偏好设置\" />\n              <Menu.Divider />\n              <Menu.Item icon=\"map\" text=\"谷歌地图\" />\n            </Menu>\n          </div>\n          <div style={{ flex: 1, minWidth: 30 }}>\n            Right Pane\n          </div>\n        </Split>\n      </>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| visiable | 设置拖拽的工具条，是否可见 | Boolean/Array | `true` |\n| disable | 设置拖拽的工具条，禁用 | Boolean/Array | - |\n| lineBar | 设置拖拽的工具条，为线条样式。 | Boolean | - |\n| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |\n| onDragging | 拖拽宽度/高度变化回调函数，宽度或者高度根据 mode 参数来确定 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |\n| onDragEnd | 拖拽结束的回调函数 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |\n"}}]);