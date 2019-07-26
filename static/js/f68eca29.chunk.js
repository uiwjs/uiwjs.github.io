(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{663:function(n,o){n.exports='Grid 删格\n===\n\n基于 `flex` 栅格系统。\n\n```jsx\nimport { Row, Col } from \'uiw\';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst Box = ({ num, height, width, style, background }) => <div style={{ ...style, textAlign: \'center\', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>\nconst Demo = () => (\n  <Row>\n    <Col fixed style={{ width: 150 }}> <Box num="1" background="#A5A5A5" /> </Col>\n    <Col grow={2}> <Box num="2" background="#dedede" /> </Col>\n    <Col grow={1}> <Box num="3" background="#A5A5A5" /> </Col>\n  </Row>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Gutter\n\n栅格间隔，可以写成像素值\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst Blank = ({ num, height, width, style, background }) => <div style={{ ...style, textAlign: \'center\', paddingTop: 5,paddingBottom: 5, background, width, height}}>Col {num}</div>\n\nReactDOM.render(\n  <div>\n    <Row gutter={10}>\n      <Col> <Blank background="#A5A5A5" num={1}/> </Col>\n      <Col> <Blank background="#dedede" num={2}/> </Col>\n      <Col> <Blank background="#A5A5A5" num={3}/> </Col>\n    </Row>\n    <Row style={{ marginTop: 10 }}>\n      <Col> <Blank background="#A5A5A5" num={1}/> </Col>\n      <Col> <Blank background="#dedede" num={2}/> </Col>\n      <Col> <Blank background="#A5A5A5" num={3}/> </Col>\n    </Row>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### Flex 行设置列对齐\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst colStyl = { backgroundColor: \'rgba(230, 230, 230, 0.67)\', marginBottom: 10 }\nconst Blank = ({ num, height, style, background = \'#2EA3F4\' }) => <div style={{ ...style, textAlign: \'center\', color: \'#fff\', paddingTop: 5, paddingBottom: 5, background, height}}>Col {num}</div>\nconst Demo = () => (\n  <div>\n    <Row gutter={10} justify="center" align="top" style={colStyl}>\n      <Col span="2"> <Blank height={35} num={1}/> </Col>\n      <Col span="2"> <Blank height={50} num={2}/> </Col>\n      <Col span="2"> <Blank height={70} num={3}/> </Col>\n    </Row>\n    <Row gutter={10} justify="space-around" align="middle"  style={colStyl}>\n      <Col span="2"> <Blank height={35} num={1}/> </Col>\n      <Col span="2"> <Blank height={50} num={2}/> </Col>\n      <Col span="2"> <Blank height={70} num={3}/> </Col>\n    </Row>\n    <Row gutter={10} justify="space-between" align="bottom" style={colStyl}>\n      <Col span="2"> <Blank height={35} num={1}/> </Col>\n      <Col span="2"> <Blank height={50} num={2}/> </Col>\n      <Col span="2"> <Blank height={70} num={3}/> </Col>\n    </Row>\n    <Row gutter={10} justify="flex-end" align="bottom" style={colStyl}>\n      <Col span="2"> <Blank height={35} num={1}/> </Col>\n      <Col span="2"> <Blank height={50} num={2}/> </Col>\n      <Col span="2"> <Blank height={70} num={3}/> </Col>\n    </Row>\n    <Row gutter={10} justify="center" align="baseline"  style={{ ...colStyl, marginBottom: 0 }}>\n      <Col span="2"> <Blank height={85} style={{ lineHeight: \'85px\' }} num={1}/> </Col>\n      <Col span="2"> <Blank height={50} num={2}/> </Col>\n      <Col span="2"> <Blank height={70} num={3}/> </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Flex 列对齐\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst Blank = ({ num, style, background = \'#2EA3F4\' }) => <div style={{ ...style, textAlign: \'center\', color: \'#fff\', paddingTop: 5, paddingBottom: 5, background }}>Col {num}</div>\nconst Demo = () => (\n  <div>\n    <Row gutter={10} style={{height: 130}}>\n      <Col align="top"> <Blank num={1}/> </Col>\n      <Col align="middle"> <Blank num={2}/> </Col>\n      <Col align="bottom"> <Blank num={3}/> </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 对齐内容\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst rowStyl = { backgroundColor: \'rgba(230, 230, 230, 0.67)\', marginBottom: 10 }\nconst Blank = ({ num, height, width, style, background = \'#2EA3F4\' }) => <div style={{ ...style, textAlign: \'center\', color: \'#fff\', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>\nconst Demo = () => (\n  <div>\n    <Row gutter={10} justify="flex-start" style={rowStyl}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} justify="center" style={rowStyl}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} justify="flex-end" style={rowStyl}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} justify="space-between" style={rowStyl}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} justify="space-around" style={rowStyl}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} justify="space-evenly" style={{...rowStyl, marginBottom: 0 }}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 24删格\n\n可以通过指定 `24` 列中每列的宽度来创建基本网格系统。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst Blank = ({ num, height, width, style, background = \'#2EA3F4\' }) => <div style={{ ...style, textAlign: \'center\', color: \'#fff\', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>\nconst Demo = () => (\n  <div>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col span="2"> <Blank num={1}/> </Col>\n      <Col span="2"> <Blank num={2}/> </Col>\n      <Col span="2"> <Blank num={3}/> </Col>\n      <Col span="2"> <Blank num={4}/> </Col>\n      <Col span="2"> <Blank num={5}/> </Col>\n      <Col span="2"> <Blank num={6}/> </Col>\n      <Col span="2"> <Blank num={7}/> </Col>\n      <Col span="2"> <Blank num={8}/> </Col>\n      <Col span="2"> <Blank num={9}/> </Col>\n      <Col span="2"> <Blank num={10}/> </Col>\n      <Col span="2"> <Blank num={11}/> </Col>\n      <Col span="2"> <Blank num={12}/> </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col span="16"> <Blank num={1}/> </Col>\n      <Col span="8"> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col span="8"> <Blank num={1}/> </Col>\n      <Col span="8"> <Blank num={2}/> </Col>\n      <Col span="8"> <Blank num={3}/> </Col>\n    </Row>\n    <Row gutter={10}>\n      <Col span="12"> <Blank num={1}/> </Col>\n      <Col span="12"> <Blank num={2}/> </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 动态列增长\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Row, Col } from \'uiw\';\n\nconst Blank = ({ num, style, background = \'#2EA3F4\' }) => <div style={{ ...style, textAlign: \'center\', color: \'#fff\', paddingTop: 5, paddingBottom: 5, background }}>Col {num}</div>\nconst Demo = () => (\n  <div>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col> <Blank num={1}/> </Col>\n      <Col grow={2}> <Blank num={2}/> </Col>\n    </Row>\n    <Row gutter={10}>\n      <Col> <Blank num={1}/> </Col>\n      <Col grow={2}> <Blank num={2}/> </Col>\n      <Col grow={5}> <Blank num={3}/> </Col>\n    </Row>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Row\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| gutter | 栅格间隔间距 | number | - |\n| justify | flex 布局下的水平排列方式 | Enum{`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`} | - |\n| align | flex 布局下的垂直对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |\n\n\n## Col\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| fixed | 如果为 `true`，则列宽固定为其内容的宽度 | boolean | - |\n| grow | 列的宽度相对于同一网格中其他列的比率 | number | - |\n| align | 网格中列的对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |'}}]);