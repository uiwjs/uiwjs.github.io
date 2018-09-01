(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 519:
/***/ (function(module, exports) {

module.exports = "Tabs 标签页\n===\n\n标签页切换组件，分隔内容上有关联但属于不同类别的数据集合。\n\n\n### 基本用法\n\n基础的、简洁的卡片式标签页。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Tabs activeKey=\"1\" onTabClick={(tab, key, e) => {\n          console.log(\"=>\",key,tab)\n        }}>\n        <Tabs.Pane label=\"用户管理\" key=\"1\">用户管理</Tabs.Pane>\n        <Tabs.Pane label=\"配置管理\" key=\"2\">配置管理</Tabs.Pane>\n        <Tabs.Pane sequence=\"fadeIn up\" label=\"角色管理\" key=\"3\">角色管理</Tabs.Pane>\n        <Tabs.Pane label=\"大爷欢乐多\" key=\"4\"><div>大爷欢乐多</div><div>大爷欢乐多</div></Tabs.Pane>\n      </Tabs>\n    )\n  }\n}\n```\n<!--End-->\n\n### 卡片式页签\n\n另一种样式的页签，不提供对应的垂直样式。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Tabs type=\"card\" activeKey=\"2\" onTabClick={(tab, key, e) => {\n          console.log(\"=>\",key,tab)\n        }}>\n        <Tabs.Pane label=\"用户管理\" key=\"1\">用户管理</Tabs.Pane>\n        <Tabs.Pane label={<span><Icon type=\"setting\" />配置管理 </span>} key=\"2\">配置管理</Tabs.Pane>\n        <Tabs.Pane sequence=\"fadeIn up\" label=\"角色管理\" key=\"3\">角色管理</Tabs.Pane>\n        <Tabs.Pane label=\"大爷欢乐多\" key=\"4\"><div>大爷欢乐多</div><div>大爷欢乐多</div></Tabs.Pane>\n      </Tabs>\n    )\n  }\n}\n```\n<!--End-->\n\n### 禁用卡片选项\n\n`<Tabs.Pane>` 设置参数 `disabled={true}` 来禁用卡片选项。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Tabs type=\"card\" activeKey=\"2\" \n          style={{paddingBottom:\"30px\"}}\n          onTabClick={(tab) => {\n            console.log(tab.props.activeKey)\n          }}>\n          <Tabs.Pane disabled={true} label=\"用户管理\" key=\"1\">用户管理</Tabs.Pane>\n          <Tabs.Pane label={<span><Icon type=\"setting\" />配置管理 </span>} key=\"2\">配置管理</Tabs.Pane>\n          <Tabs.Pane disabled label=\"角色管理\" key=\"3\">角色管理</Tabs.Pane>\n          <Tabs.Pane label=\"大爷欢乐多\" key=\"4\"><div>大爷欢乐多</div><div>大爷欢乐多</div></Tabs.Pane>\n        </Tabs>\n        <Tabs activeKey=\"1\" onTabClick={(tab, key, e) => {\n          console.log(\"=>\",key,tab)\n        }}>\n          <Tabs.Pane label=\"用户管理\" key=\"1\">用户管理</Tabs.Pane>\n          <Tabs.Pane disabled={true} label=\"配置管理\" key=\"2\">配置管理</Tabs.Pane>\n          <Tabs.Pane sequence=\"fadeIn up\" label=\"角色管理\" key=\"3\">角色管理</Tabs.Pane>\n          <Tabs.Pane label=\"大爷欢乐多\" key=\"4\"><div>大爷欢乐多</div><div>大爷欢乐多</div></Tabs.Pane>\n        </Tabs>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 位置\n\n有四个位置，position=`top` `right` `bottom` `left`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      tagRadioOptions:[\n          {color:\"purple\", value:'top',label:'顶部'},\n          {color:\"orange\", value:'right',label:'右边'},\n          {color:\"green\", value:'bottom',label:'底部'},\n          {color:\"blue\", value:'left',label:'左边'}\n      ],\n      position:['left']\n    }\n  }\n  render() {\n    const TagGroup = Tag.Group;\n    return (\n      <div>\n\n        <TagGroup \n          options={this.state.tagRadioOptions}\n          checked={true}\n          isRadio={true}\n          style={{paddingBottom:25}}\n          checkedValues={this.state.position}\n          onChange={(e,value)=>{\n            this.setState({position:value})\n            console.log(\"value::\",value)\n          }}\n        />\n          \n        <Tabs type=\"line\" position={this.state.position[0]} activeKey=\"2\" onTabClick={(tab, key, e) => {\n          console.log(\"=>\",key,tab)\n        }}>\n          <Tabs.Pane label={<span><Icon type=\"menu\" />用户管理 </span>} key=\"1\">用户管理</Tabs.Pane>\n          <Tabs.Pane label={<span><Icon type=\"setting\" />配置管理 </span>} key=\"2\">配置管理</Tabs.Pane>\n          <Tabs.Pane sequence=\"fadeIn up\" label={<span><Icon type=\"user\" />角色管理 </span>}  key=\"3\">角色管理</Tabs.Pane>\n          <Tabs.Pane label={<span><Icon type=\"heart-on\" />大爷欢乐多 </span>} key=\"4\"><div>大爷欢乐多</div><div>大爷欢乐多</div></Tabs.Pane>\n        </Tabs>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 可关闭\n\n可以关闭标签页，只有卡片样式的页签支持新增和关闭选项。 \n\n<!--DemoStart--> \n`<Tabs>`使用 `closable={true}` 开启标签可关闭。  \n`<Tabs.Pane>`使用 `closable={false}` 标签关闭按钮被隐藏。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    }\n  }\n  render() {\n    const TagGroup = Tag.Group;\n    return (\n      <div>\n        <Tabs closable type=\"card\" activeKey=\"1\" \n          onTabRemove={(tab, idx, e)=>{\n            console.log(\"=>\",tab, idx, e)\n          }}\n          onTabClick={(tab,  key, e) => {\n            console.log(\"=>\",key,tab)\n          }}\n        >\n          <Tabs.Pane label=\"用户管理\" key=\"1\">用户管理</Tabs.Pane>\n          <Tabs.Pane closable={false} label=\"配置管理\" key=\"2\">配置管理</Tabs.Pane>\n          <Tabs.Pane label=\"角色管理\"  key=\"3\">角色管理</Tabs.Pane>\n        </Tabs>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 附加内容\n\n可以在页签右边添加附加操作。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      panes: [\n        { title: '用户管理', content: '用户管理内容1', key: '1' },\n        { title: '配置管理', content: '配置管理内容2', key: '2' },\n        { title: '角色管理', content: '角色管理内容3', key: '3', closable: false },\n        { title: '大爷欢乐多', content: <div>大爷欢乐多大爷欢乐多</div>, key: '4' },\n      ]\n    }\n  }\n  render() {\n    const { panes } = this.state;\n    return (\n      <Tabs\n        activeKey=\"1\"\n        tabBarExtra={<Button size=\"mini\">添加更多功能</Button>}\n        onTabClick={(tab, key, e) => {\n          console.log(\"=>\",key,tab)\n        }}>\n        {panes.map((item) => {\n          return (\n            <Tabs.Pane key={item.key} label={item.title}>{item.content}</Tabs.Pane>\n          );\n        })}\n      </Tabs>\n    )\n  }\n}\n```\n<!--End-->\n\n### 新增和关闭页签\n\n设置参数 `onTabAdd` 按钮将被展示。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      panes: [\n        { title: '用户管理', content: '用户管理内容1', key: '1' },\n        { title: '配置管理', content: '配置管理内容2', key: '2' },\n        { title: '角色管理', content: '角色管理内容3', key: '3', closable: false },\n        { title: '大爷欢乐多', content: <div>大爷欢乐多大爷欢乐多</div>, key: '4' },\n      ],\n      activeKey: '1',\n    }\n  }\n  render() {\n    const { panes, activeKey } = this.state;\n    return (\n      <Tabs\n        closable\n        activeKey={activeKey}\n        tabBarExtra={<Button size=\"mini\">添加更多功能</Button>}\n        onTabAdd={(lastKey, lastChild, e) => {\n          const panes = this.state.panes;\n          // lastKey = parseInt(lastKey, 10)\n          const activeKey = String(parseInt(lastKey, 10) + 1);\n          panes.push({ title: '新标签', content: '新标签内容', key: activeKey });\n          this.setState({ panes, activeKey });\n          console.log('onTabAdd:', lastKey, lastChild, e);\n        }}\n        onTabClick={(tab, key, e) => {\n          this.setState({ activeKey: key });\n          console.log(\"=>\",key,tab)\n        }}\n      >\n        {panes.map((item) => {\n          return (\n            <Tabs.Pane key={item.key} label={item.title}>{item.content}</Tabs.Pane>\n          );\n        })}\n      </Tabs>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## API\n\n### Tags \n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | String | `white` |\n| activeKey | 当前激活 `tab` 面板的 `key` | String | - |\n| tabBarExtra | `tab` `bar` 上额外的元素 | String\\ReactNode | - |\n| onTabClick | `tab` 被点击的回调 | Function | `(item,key,e)=>{}` |\n| onTabRemove | 点击 `tab` 被移除的回调事件 | Function | `(item,key,e)=>{}` |\n| onTabAdd | 点击 `tab` 添加按钮的回调事件，事件存在按 | Function | `(lastKey, lastChild, e)=>{}` |\n| position | 页选项卡位置，可选值有 `top` `right` `bottom` `left` | String | `top` |\n| sequence | 设置`<Tabs.Pane>`进出动画，默认动画效果参考 `<Transition>` | String | `fadeIn` |\n\n### Tag.Pane\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| label | 选项卡标题 | String,Node | - |\n| keys | 对应 activeKey | String,Node | - |\n| closable | 标签是否可关闭 | Boolean | `false` |\n| disabled | 标签是禁用不可点击 | Boolean | `false` |\n| sequence | 给每个`Pane`定义不同的动画效果 | Boolean | `fadeIn` |\n"

/***/ })

}]);