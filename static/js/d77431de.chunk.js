(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{657:function(n,e){n.exports='Input 输入框\n===\n\n通过鼠标或键盘输入内容，是最基础的表单域的包装。\n\n```jsx\nimport { Input } from \'uiw\';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Input placeholder="请输入内容" style={{ maxWidth: 200 }} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 插入图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col } from \'uiw\';\n\nconst stylItem = { margin: 20 };\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input preIcon="delete" placeholder="请输入内容" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="tag" placeholder="请输入内容" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="picasa" placeholder="请输入内容" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="like-o" placeholder="请输入内容" />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 后面插入内容\n\n向后面插入 [`Button`](#/components/button) 或者 [`Tag`](#/components/tag)\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Button, Tag } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          placeholder="请输入密码"\n          addonAfter={<Button icon="lock" size="small" basic type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="请输入内容"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="请输入内容"\n          addonAfter={<Button icon="apple" size="small" type="primary">按钮</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="primary">按钮</Button>}\n        />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 输入框尺寸\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Tag, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="请输入密码"\n          addonAfter={<Button icon="lock" basic type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="请输入内容"\n          addonAfter={<Button icon="arrow-right" basic size="small" type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="primary">按钮</Button>}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="请输入密码"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="请输入内容"\n          addonAfter={<Tag title="药丸" color="#1C7CEB" color="#40bf16">丸</Tag>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="请输入内容"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="请输入密码"\n          addonAfter={<Button icon="apple" type="primary">按钮</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="primary">搜索</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="primary">按钮</Button>}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          placeholder="请输入密码"\n          addonAfter={<Button size="small" type="light">亮按钮</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="danger">按钮</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          placeholder="请输入内容"\n          addonAfter={<Button size="small" type="warning">按钮</Button>}\n        />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 密码输入框\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      btnIcon: \'lock\',\n    }\n  }\n  onClick() {\n    console.log(\'this.state.btnIcon:\',this.state.btnIcon);\n    this.setState({\n      btnIcon: this.state.btnIcon === \'lock\' ? \'unlock\' : \'lock\',\n    })\n  }\n  render() {\n    return (\n      <Row gutter={10}>\n        <Col fixed>\n          <Input\n            preIcon="like-o"\n            type={this.state.btnIcon === \'lock\' ? \'password\' : \'text\'}\n            placeholder="请输入密码"\n            addonAfter={<Button icon={this.state.btnIcon} onClick={this.onClick.bind(this)} size="small" basic type="light" />}\n          />\n        </Col>\n      </Row>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 输入框被禁用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col } from \'uiw\';\n\nconst stylItem = { margin: 20 };\nconst Demo = () => (\n  <Row gutter={10}>\n    <Col fixed>\n      <Input disabled preIcon="delete" placeholder="请输入内容" />\n    </Col>\n    <Col fixed>\n      <Input disabled preIcon="tag" placeholder="请输入内容" />\n    </Col>\n    <Col fixed>\n      <Input disabled preIcon="picasa" placeholder="请输入内容" />\n    </Col>\n    <Col fixed>\n      <Input disabled preIcon="like-o" placeholder="请输入内容" />\n    </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Input\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 绑定值 | String | - |\n| disabled | 禁用输入框 | Boolean | `false` |\n| preIcon | 输入框`前`面放置图标  | String/ReactNode | - |\n| addonAfter | \t带标签的 input，设置后置标签 | String/ReactNode | - |\n| size | 指定输入框的尺寸，除了默认的大小外，还提供了 `large`、`small` 和 `default` 三种尺寸。 | String | - |'}}]);