webpackJsonp([68],{815:function(n,t){n.exports="Notification \u901a\u77e5\u63d0\u9192\u6846\n===\n\n\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Button onClick={this.open.bind(this)}>4.5\u79d2\u540e\u53ef\u81ea\u52a8\u5173\u95ed</Button>\n        <Button onClick={this.open2.bind(this)}>\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed</Button>\n        <Button onClick={this.open3.bind(this)}>10\u79d2\u540e\u81ea\u52a8\u5173\u95ed</Button>\n      </div>\n    )\n  }\n  open() {\n    Notification({\n      message: '\u901a\u77e5\u63d0\u9192\u6846\u6807\u9898\u540d\u79f0',\n      description: '\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848',\n      onClose(){\n        console.log(\"onClose-> \u5173\u95ed\u56de\u8c03\u4e8b\u4ef6\uff01\")\n      }\n    });\n  }\n  open2() {\n    Notification({\n      message: '\u63d0\u793a',\n      description: '\u8fd9\u662f\u4e00\u6761\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u7684\u6d88\u606f',\n      duration: 0,\n    });\n  }\n  open3() {\n    Notification.info({\n      message: '\u63d0\u793a',\n      description: '\u8fd9\u662f\u4e00\u6761\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u7684\u6d88\u606f',\n    });\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n### \u5e26\u72b6\u6001\u7684\u901a\u77e5\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Button onClick={this.open1.bind(this)}>\u6210\u529f</Button>\n        <Button onClick={this.open2.bind(this)}>\u8b66\u544a</Button>\n        <Button onClick={this.open3.bind(this)}>\u6d88\u606f</Button>\n        <Button onClick={this.open4.bind(this)}>\u9519\u8bef</Button>\n      </div>\n    )\n  }\n  //'success', 'warning','info', 'error'\n  open1() {\n    Notification({\n      message: '\u901a\u77e5\u63d0\u9192\u6846\u6807\u9898\u540d\u79f0',\n      description: '\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848',\n      type:\"success\",\n    });\n  }\n  open2() {\n    Notification({\n      message: 'Notification Title',\n      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',\n      type:\"warning\",\n    });\n  }\n  open3() {\n    Notification({\n      message: 'Notification Title',\n      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',\n      type:\"info\",\n    });\n  }\n  open4() {\n    Notification({\n      message: 'Notification Title',\n      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',\n      type:\"error\",\n    });\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u5f39\u51fa\u901a\u77e5\u4f4d\u7f6e\n\n\u53ef\u4ee5\u8bbe\u7f6e\u901a\u77e5\u4ece\u53f3\u4e0a\u89d2\u3001\u53f3\u4e0b\u89d2\u3001\u5de6\u4e0b\u89d2\u3001\u5de6\u4e0a\u89d2\u5f39\u51fa\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: 'topLeft', label: 'topLeft' }, \n        { value: 'topRight', label: 'topRight' }, \n        { value: 'bottomLeft', label: 'bottomLeft' }, \n        { value: 'bottomRight', label: 'bottomRight' }, \n      ],\n      value: 'topLeft'\n    };\n  }\n  onChange(e,value){\n    this.setState({\n      value\n    })\n  }\n  open() {\n    Notification({\n      message: 'Notification Title',\n      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',\n      type:\"info\",\n      placement:this.state.value\n    });\n  }\n  render() {\n    return (\n      <div>\n      <Select onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n        {\n          this.state.options.map(elm => {\n            return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n          })\n        }\n      </Select>\n      <Button style={{marginLeft:10}} size='small' onClick={this.open.bind(this)}>\u70b9\u51fb</Button>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n## API\n\n### Notification Attributes\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| message | \u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009 | String|ReactNode | - |\n| description | \u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009 | String|ReactNode | - |\n| className | \u81ea\u5b9a\u4e49 CSS class | String | - |\n| style | \u81ea\u5b9a\u4e49\u5185\u8054\u6837\u5f0f | String | - |\n| showIcon | \u662f\u5426\u663e\u793a\u56fe\u6807 | Boolean | - |\n| placement | \u5f39\u51fa\u4f4d\u7f6e\uff0c\u53ef\u9009 `topLeft`\u3001`topRight`\u3001`bottomLeft`\u3001`bottomRight` | Boolean | `topRight` |\n| duration | \u663e\u793a\u65f6\u95f4, \u79d2\u3002\u8bbe\u4e3a 0 \u5219\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed | String | 4.5 |\n| onClose | \u901a\u77e5\u63d0\u9192\u6846\u5173\u95ed\u56de\u8c03\u4e8b\u4ef6 | Function | - |"}});