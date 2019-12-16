(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[427],{1157:function(n,e,a){"use strict";a.r(e),e.default='Tabs \u6807\u7b7e\u9875\n===\n\n\u6807\u7b7e\u9875\u5207\u6362\u7ec4\u4ef6\uff0c\u5206\u9694\u5185\u5bb9\u4e0a\u6709\u5173\u8054\u4f46\u5c5e\u4e8e\u4e0d\u540c\u7c7b\u522b\u7684\u6570\u636e\u96c6\u5408\u3002\n\n```jsx\nimport { Tabs } from \'uiw\';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u57fa\u7840\u7684\u3001\u7b80\u6d01\u7684\u5361\u7247\u5f0f\u6807\u7b7e\u9875\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tabs } from \'uiw\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Tabs activeKey="1" onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="\u7528\u6237\u7ba1\u7406" key="1">\u7528\u6237\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane label="\u914d\u7f6e\u7ba1\u7406" key="2">\u914d\u7f6e\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane sequence="fadeIn up" label="\u89d2\u8272\u7ba1\u7406" key="3">\u89d2\u8272\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane label="\u5927\u7237\u6b22\u4e50\u591a" key="4"><div>\u5927\u7237\u6b22\u4e50\u591a22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u884c\u6837\u5f0f\n\n\u57fa\u7840\u7684\u3001\u7b80\u6d01\u7684\u5361\u7247\u5f0f\u6807\u7b7e\u9875\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tabs } from \'uiw\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Tabs type="line" activeKey="1" onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="\u7528\u6237\u7ba1\u7406" key="1">\u7528\u6237\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane disabled label="\u914d\u7f6e\u7ba1\u7406" key="2">\u914d\u7f6e\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane sequence="fadeIn up" label="\u89d2\u8272\u7ba1\u7406" key="3">\u89d2\u8272\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane label="\u5927\u7237\u6b22\u4e50\u591a" key="4"><div>\u5927\u7237\u6b22\u4e50\u591a22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5361\u7247\u6837\u5f0f\n\n\u53e6\u4e00\u79cd\u6837\u5f0f\u7684\u9875\u7b7e\uff0c\u4e0d\u63d0\u4f9b\u5bf9\u5e94\u7684\u5782\u76f4\u6837\u5f0f\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tabs } from \'uiw\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Tabs type="card" activeKey="1" onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="\u7528\u6237\u7ba1\u7406" key="1">\u7528\u6237\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane label="\u914d\u7f6e\u7ba1\u7406" key="2">\u914d\u7f6e\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane disabled sequence="fadeIn up" label="\u89d2\u8272\u7ba1\u7406" key="3">\u89d2\u8272\u7ba1\u7406</Tabs.Pane>\n        <Tabs.Pane label="\u5927\u7237\u6b22\u4e50\u591a" key="4"><div>\u5927\u7237\u6b22\u4e50\u591a22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u5361\u7247\u6837\u5f0f\n\n\u53e6\u4e00\u79cd\u6837\u5f0f\u7684\u9875\u7b7e\uff0c\u4e0d\u63d0\u4f9b\u5bf9\u5e94\u7684\u5782\u76f4\u6837\u5f0f\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tabs, Divider } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: \'1\',\n    };\n  }\n  render() {\n    const { activeKey } = this.state;\n    return (\n      <div>\n        <Tabs\n          type="card"\n          activeKey={activeKey}\n          onTabClick={(activeKey, key, e) => {\n            this.setState({ activeKey });\n          }}\n        >\n          <Tabs.Pane label="\u7528\u6237\u7ba1\u7406" key="1" />\n          <Tabs.Pane label="\u914d\u7f6e\u7ba1\u7406" key="2" />\n          <Tabs.Pane disabled sequence="fadeIn up" label="\u89d2\u8272\u7ba1\u7406" key="3" />\n          <Tabs.Pane label="\u5927\u7237\u6b22\u4e50\u591a" key="4" />\n        </Tabs>\n        <Divider />\n        {activeKey === \'1\' && (\n          <div>\u7528\u6237\u7ba1\u7406{activeKey}</div>\n        )}\n        {activeKey === \'2\' && (\n          <div>\u914d\u7f6e\u7ba1\u7406{activeKey}</div>\n        )}\n        {activeKey === \'3\' && (\n          <div>\u89d2\u8272\u7ba1\u7406{activeKey}</div>\n        )}\n        {activeKey === \'4\' && (\n          <div>\u5927\u7237\u6b22\u4e50\u591a{activeKey}</div>\n        )}\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Tabs.Porps \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| type | \u9875\u7b7e\u7684\u57fa\u672c\u6837\u5f0f | Enum{`line`\u3001`card`\u3001`default`} | `default` |\n| activeKey | \u5f53\u524d\u6fc0\u6d3b `tab` \u9762\u677f\u7684 `key` | String | - |\n| onTabClick | `tab` \u88ab\u70b9\u51fb\u7684\u56de\u8c03 | Function | `(item, key, e)=>{}` |\n\n## Tabs.Pane.Porps \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| label | \u9009\u9879\u5361\u6807\u9898 | String,Node | - |\n| keys | \u5bf9\u5e94 activeKey | String,Node | - |\n| disabled | \u6807\u7b7e\u662f\u7981\u7528\u4e0d\u53ef\u70b9\u51fb | Boolean | `false` |'}}]);