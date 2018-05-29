(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ 635:
/***/ (function(module, exports) {

module.exports = "Select 选择器\n===\n\n当选项过多时，使用下拉菜单展示并选择内容。\n\n### 基础用法\n\n适用广泛的基础单选`value`的值为当前被选中的Option的 `value` 属性值\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒', disabled: true}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n        { value: '选项8', label: '楚乡王白酒' }, \n        { value: '选项9', label: '五粮液' },\n        { value: '选项10', label: '红葡萄酒' }, \n        { value: '选项11', label: '红葡萄酒' }, \n        { value: '选项12', label: '绍兴黄酒', disabled: true}, \n        { value: '选项13', label: '燕京啤酒' }, \n        { value: '选项14', label: '楚乡王白酒' }, \n        { value: '选项15', label: '五粮液' },\n        { value: '选项16', label: '绍兴黄酒', disabled: true}, \n        { value: '选项17', label: '燕京啤酒' }, \n        { value: '选项18', label: '楚乡王白酒' }, \n        { value: '选项19', label: '五粮液' },\n      ],\n      value: '选项1'\n    };\n  }\n  onChange(e,value){\n    this.setState({ value });\n    console.log(\"onChange:\",value,e)\n  }\n  render() {\n    return (\n      <Select onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n        {\n          this.state.options.map(elm => {\n            return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n### 禁用状态\n\n`Select`设置`disabled`属性，则整个选择器不可用。单个选项禁用，`Option`设置`disabled`属性即可。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒' }, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n      ],\n      value: ''\n    };\n  }\n  render() {\n    return (\n      <Select style={{width:200}} value={this.state.value} disabled={true}>\n        {\n          this.state.options.map(el => {\n            return <Select.Option key={el.value} label={el.label} value={el.value} />\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 自定义模板\n\n可以自定义备选项。\n\n<!--DemoStart--> \n将自定义的 `HTML` 模板插入`Option`中即可。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      cities: [\n        { value: 'Beijing', label: '北京' }, \n        { value: 'Shanghai', label: '上海' }, \n        { value: 'Nanjing', label: '南京', disabled: true }, \n        { value: 'Chengdu', label: '成都' }, \n        { value: 'Shenzhen', label: '深圳' }, \n        { value: 'Guangzhou', label: '广州' }\n      ],\n      value: ''\n    };\n  }\n  render() {\n    const {OptionGroup,Option} = Select\n    return (\n      <Select style={{width:200}} value={this.state.value}>\n        {\n          this.state.cities.map((elm,idx) => {\n            return (\n              <Option key={idx} label={elm.label} value={elm.value} disabled={elm.disabled}>\n                <span style={{float: 'left'}}>{elm.label}</span>\n                <span style={{float: 'right'}}>{elm.value}</span>\n              </Option>\n            )\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 可清空单选\n\n包含清空按钮，可将选择器清空为初始状态。\n\n<!--DemoStart--> \n为`Select`设置`clearable`属性，则可将选择器清空。需要注意的是，`clearable`属性仅适用于单选。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒', disabled: true}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n      ],\n      value: '选项1'\n    };\n  }\n  onChange(e,value){\n    this.setState({ value });\n    console.log(\"onChange:\",value,e)\n  }\n  onClear(state){\n    console.log(\"onChange:\", state)\n  }\n  render() {\n    return (\n      <div>\n        <Select\n          clearable={true}\n          onClear={this.onClear.bind(this)}\n          onChange={this.onChange.bind(this)}\n          style={{width:200}}\n          value={this.state.value}\n        >\n          {\n            this.state.options.map(elm => {\n              return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n            })\n          }\n        </Select>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 带搜索框\n\n展开后可对选项进行搜索。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒', disabled: true}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n      ],\n      value: ''\n    };\n  }\n  onChange(e,value){\n    this.setState({ value });\n    console.log(\"onChange:\",value,e)\n  }\n  render() {\n    return (\n      <div>\n        <Select filterable={true} onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n          {\n            this.state.options.map(elm => {\n              return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n            })\n          }\n        </Select>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 远程搜索\n\n从服务器搜索数据，输入关键字进行查找，具有加载状态效果。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [],\n      states: [\n        { value: \"沃尔玛（WAL-MART STORES)\", label: \"沃尔玛（WAL-MART STORES)\" },\n        { value: \"国家电网公司（STATE GRID)\", label: \"国家电网公司（STATE GRID)\" },\n        { value: \"中国石油化工集团公司（SINOPEC GROUP)\", label: \"中国石油化工集团公司（SINOPEC GROUP)\" },\n        { value: \"中国石油天然气集团公司（CHINA NATIONAL PETROLEUM)\", label: \"中国石油天然气集团公司（CHINA NATIONAL PETROLEUM)\" },\n        { value: \"丰田汽车公司（TOYOTA MOTOR)\", label: \"丰田汽车公司（TOYOTA MOTOR)\" },\n        { value: \"大众公司（VOLKSWAGEN)\", label: \"大众公司（VOLKSWAGEN)\" },\n        { value: \"荷兰皇家壳牌石油公司（ROYAL DUTCH SHELL)\", label: \"荷兰皇家壳牌石油公司（ROYAL DUTCH SHELL)\" },\n        { value: \"伯克希尔－哈撒韦公司（BERKSHIRE HATHAWAY)\", label: \"伯克希尔－哈撒韦公司（BERKSHIRE HATHAWAY)\" },\n        { value: \"苹果公司（APPLE)\", label: \"苹果公司（APPLE)\" },\n        { value: \"埃克森美孚（EXXON MOBIL)\", label: \"埃克森美孚（EXXON MOBIL)\" },\n        { value: \"麦克森公司（MCKESSON)\", label: \"麦克森公司（MCKESSON)\" },\n        { value: \"英国石油公司（BP)\", label: \"英国石油公司（BP)\" },\n        { value: \"联合健康集团（UNITEDHEALTH GROUP)\", label: \"联合健康集团（UNITEDHEALTH GROUP)\" },\n        { value: \"CVS Health公司（CVS HEALTH)\", label: \"CVS Health公司（CVS HEALTH)\" },\n        { value: \"三星电子（SAMSUNG ELECTRONICS)\", label: \"三星电子（SAMSUNG ELECTRONICS)\" },\n        { value: \"嘉能可（GLENCORE)\", label: \"嘉能可（GLENCORE)\" },\n        { value: \"戴姆勒股份公司（DAIMLER)\", label: \"戴姆勒股份公司（DAIMLER)\" },\n        { value: \"通用汽车公司（GENERAL MOTORS)\", label: \"通用汽车公司（GENERAL MOTORS)\" },\n        { value: \"美国电话电报公司（AT&T)\", label: \"美国电话电报公司（AT&T)\" },\n        { value: \"EXOR集团（EXOR GROUP)\", label: \"EXOR集团（EXOR GROUP)\" },\n        { value: \"福特汽车公司（FORD MOTOR)\", label: \"福特汽车公司（FORD MOTOR)\" },\n        { value: \"中国工商银行（INDUSTRIAL & COMMERCIAL BANK OF CHINA)\", label: \"中国工商银行（INDUSTRIAL & COMMERCIAL BANK OF CHINA)\" },\n        { value: \"美源伯根公司（AMERISOURCEBERGEN)\", label: \"美源伯根公司（AMERISOURCEBERGEN)\" },\n        { value: \"中国建筑工程总公司（CHINA STATE CONSTRUCTION ENGINEERING)\", label: \"中国建筑工程总公司（CHINA STATE CONSTRUCTION ENGINEERING)\" },\n        { value: \"安盛（AXA)\", label: \"安盛（AXA)\" },\n        { value: \"亚马逊（AMAZON.COM)\", label: \"亚马逊（AMAZON.COM)\" },\n        { value: \"鸿海精密工业股份有限公司（HON HAI PRECISION INDUSTRY)\", label: \"鸿海精密工业股份有限公司（HON HAI PRECISION INDUSTRY)\" },\n        { value: \"中国建设银行（CHINA CONSTRUCTION BANK)\", label: \"中国建设银行（CHINA CONSTRUCTION BANK)\" },\n        { value: \"本田汽车（HONDA MOTOR)\", label: \"本田汽车（HONDA MOTOR)\" },\n        { value: \"道达尔公司（TOTAL)\", label: \"道达尔公司（TOTAL)\" },\n        { value: \"通用电气公司（GENERAL ELECTRIC)\", label: \"通用电气公司（GENERAL ELECTRIC)\" },\n        { value: \"威瑞森电信（VERIZON COMMUNICATIONS)\", label: \"威瑞森电信（VERIZON COMMUNICATIONS)\" },\n        { value: \"日本邮政控股公司（JAPAN POST HOLDINGS)\", label: \"日本邮政控股公司（JAPAN POST HOLDINGS)\" },\n        { value: \"安联保险集团（ALLIANZ)\", label: \"安联保险集团（ALLIANZ)\" },\n        { value: \"康德乐（CARDINAL HEALTH)\", label: \"康德乐（CARDINAL HEALTH)\" },\n        { value: \"好市多（COSTCO WHOLESALE)\", label: \"好市多（COSTCO WHOLESALE)\" },\n        { value: \"沃博联（WALGREENS BOOTS ALLIANCE)\", label: \"沃博联（WALGREENS BOOTS ALLIANCE)\" },\n        { value: \"中国农业银行（AGRICULTURAL BANK OF CHINA)\", label: \"中国农业银行（AGRICULTURAL BANK OF CHINA)\" },\n        { value: \"中国平安保险（集团）股份有限公司（PING AN INSURANCE)\", label: \"中国平安保险（集团）股份有限公司（PING AN INSURANCE)\" },\n        { value: \"克罗格（KROGER)\", label: \"克罗格（KROGER)\" },\n        { value: \"上海汽车集团股份有限公司（SAIC MOTOR)\", label: \"上海汽车集团股份有限公司（SAIC MOTOR)\" },\n        { value: \"中国银行（BANK OF CHINA)\", label: \"中国银行（BANK OF CHINA)\" },\n        { value: \"法国巴黎银行（BNP PARIBAS)\", label: \"法国巴黎银行（BNP PARIBAS)\" },\n        { value: \"日产汽车（NISSAN MOTOR)\", label: \"日产汽车（NISSAN MOTOR)\" },\n        { value: \"雪佛龙（CHEVRON)\", label: \"雪佛龙（CHEVRON)\" },\n        { value: \"房利美（FANNIE MAE)\", label: \"房利美（FANNIE MAE)\" },\n        { value: \"中国移动通信集团公司（CHINA MOBILE COMMUNICATIONS)\", label: \"中国移动通信集团公司（CHINA MOBILE COMMUNICATIONS)\" },\n        { value: \"摩根大通公司（JPMORGAN CHASE & CO.)\", label: \"摩根大通公司（JPMORGAN CHASE & CO.)\" },\n        { value: \"英国法通保险公司（LEGAL & GENERAL GROUP)\", label: \"英国法通保险公司（LEGAL & GENERAL GROUP)\" },\n        { value: \"日本电报电话公司（NIPPON TELEGRAPH & TELEPHONE)\", label: \"日本电报电话公司（NIPPON TELEGRAPH & TELEPHONE)\" },\n      ],\n      value: '',\n    }\n  }\n\n  onSearch(query) {\n    if (!!query) {\n      this.setState({\n        loading: true\n      });\n      setTimeout(() => {\n        const filter = this.state.states.filter(item => {\n          return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;\n        });\n        this.setState({\n          loading: false,\n          options: filter,\n        });\n      }, 300);\n    } else {\n      this.setState({\n        options: []\n      });\n    }\n  }\n  onChange(option, curruntValue,values) {\n    this.setState({ value: curruntValue });\n    console.log('~~~~~onChange~~~~~~::', option, curruntValue,values);\n  }\n  render() {\n    return (\n      <Select\n        value={this.state.value}\n        filterable={true}\n        onSearch={this.onSearch.bind(this)}\n        onChange={this.onChange.bind(this)}\n        loading={this.state.loading}\n      >\n        {\n          this.state.options.map(el => {\n            return <Select.Option key={el.value} label={el.label} value={el.value} />\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n### 多选标签搜索\n\n用 `Tag` 展示已选择的项，需要设置`multiple=true`，`filterable=true`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒'}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n        { value: '选项8', label: '楚乡王白酒' }, \n        { value: '选项9', label: '五粮液' },\n      ],\n      value: ['选项1','选项3','选项5'],\n    };\n  }\n  onChange(e,value,values){\n    console.log(\"onChange:\",value,values,e)\n  }\n  render() {\n    return (\n      <Select onChange={this.onChange.bind(this)} filterable={true} multiple={true} style={{width:500}} value={this.state.value}>\n        {\n          this.state.options.map((elm,idx) => {\n            return <Select.Option key={idx} label={elm.label} value={elm.value} disabled={elm.disabled} />\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n### 分组\n\n备选项进行分组展示。\n\n<!--DemoStart--> \n使用 `OptionGroup` 对备选项进行分组，它的 `label` 属性为分组名。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [{\n        label: '热门城市',\n        options: [{\n          value: 'Shanghai',\n          label: '上海'\n        }, {\n          value: 'Beijing',\n          label: '北京'\n        }]\n      }, {\n        label: '城市名',\n        options: [{\n          value: 'Chengdu',\n          label: '成都'\n        }, {\n          value: 'Shenzhen',\n          label: '深圳'\n        }, {\n          value: 'Guangzhou',\n          label: '广州'\n        }, {\n          value: 'Dalian',\n          label: '大连'\n        }]\n      }],\n      value: ''\n    };\n  }\n\n  render() {\n    return (\n      <Select value={this.state.value}>\n        {\n          this.state.options.map(group => {\n            return (\n              <Select.OptionGroup key={group.label} label={group.label}>\n                {\n                  group.options.map(item => {\n                    return (\n                      <Select.Option key={item.value} label={item.label} value={item.value}>\n                        <span style={{float: 'left'}}>{item.label}</span>\n                        <span style={{float: 'right', color: '#b9b9b9', fontSize: 13}}>{item.value}</span>\n                      </Select.Option>\n                    )\n                  })\n                }\n              </Select.OptionGroup>\n            )\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 多选标签\n\n用 `Tag` 展示已选择的项，需要设置`multiple=true`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒'}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n        { value: '选项8', label: '楚乡王白酒' }, \n        { value: '选项9', label: '五粮液' },\n      ],\n      value: ['选项1','选项3','选项5'],\n    };\n  }\n  onChange(e,value,values){\n    console.log(\"onChange:\",value,values,e)\n  }\n  render() {\n    return (\n      <Select onChange={this.onChange.bind(this)} multiple={true} style={{width:200}} value={this.state.value}>\n        {\n          this.state.options.map((elm,idx) => {\n            return <Select.Option key={idx} label={elm.label} value={elm.value} disabled={elm.disabled} />\n          })\n        }\n      </Select>\n    )\n  }\n}\n```\n<!--End-->\n\n### 联动\n\n省市联动是典型的例子。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: 'Shanghai', label: '上海' }, \n        { value: 'Beijing', label: '北京', disabled: true}, \n        { value: 'Shenzhen', label: '深圳' }\n      ],\n      secondOptions:{\n        'Shanghai':[\n          { value: '001', label: '静安区' }, \n          { value: '002', label: '青浦区', disabled: true}, \n        ],\n        'Beijing':[\n          { value: '001', label: '东城区' }, \n          { value: '002', label: '西城区', disabled: true}, \n          { value: '003', label: '朝阳区', disabled: true}, \n        ]\n      },\n      secondOptionsEmpty:[],\n      value: '',\n      valueSecond: ''\n    };\n  }\n  onChange(e,value){\n    console.log(\"onChange:\",value,e)\n  }\n  render() {\n    return (\n      <div>\n        <Select style={{width:100}} onChange={(e,value)=>{\n          this.setState({\n            secondOptionsEmpty:this.state.secondOptions[value] || [],\n            value:e.props.label,\n            valueSecond:\"\"\n          })\n\n        }} value={this.state.value}>\n          {\n            this.state.options.map(el => {\n              return <Select.Option key={el.value} label={el.label} value={el.value} />\n            })\n          }\n        </Select>\n        <Select style={{width:100}} onChange={(e,value)=>{\n          \n          this.setState({\n            valueSecond:e.props.label\n          })\n\n        }} value={this.state.valueSecond}>\n          {\n            this.state.secondOptionsEmpty.map(el => {\n              return <Select.Option key={el.value} label={el.label} value={el.value} />\n            })\n          }\n        </Select>\n        <div style={{paddingTop:10}}>\n        您选择了：{`${this.state.value}-${this.state.valueSecond}`}\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 三种大小\n\n选择框大小，可选 `large`, `small`, `default`, `mini`, 输入框高度为 `34px` `26px` 和 `20px` ，默认高度为 `30px`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: [\n        { value: '选项1', label: '红葡萄酒' }, \n        { value: '选项2', label: '绍兴黄酒', disabled: true}, \n        { value: '选项3', label: '燕京啤酒' }, \n        { value: '选项4', label: '楚乡王白酒' }, \n        { value: '选项5', label: '五粮液' },\n        { value: '选项6', label: '绍兴黄酒', disabled: true}, \n        { value: '选项7', label: '燕京啤酒' }, \n      ],\n      value: '选项1'\n    };\n  }\n  onChange(e,value){\n    console.log(\"onChange:\",value,e)\n  }\n  render() {\n    return (\n      <div>\n        <div>\n          <Select size=\"large\" onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n            {\n              this.state.options.map(elm => {\n                return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n              })\n            }\n          </Select>\n          <Select onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n            {\n              this.state.options.map(elm => {\n                return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n              })\n            }\n          </Select>\n          <Select size=\"small\" onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n            {\n              this.state.options.map(elm => {\n                return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n              })\n            }\n          </Select>\n          <Select size=\"mini\" onChange={this.onChange.bind(this)} style={{width:200}} value={this.state.value}>\n            {\n              this.state.options.map(elm => {\n                return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n              })\n            }\n          </Select>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n### Select\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 指定当前选中的条目，值为`value` 或`label` | String/String[] | - |\n| name | `Select` 是通过 `input` 实现的，这里是设置 `name` 的属性 | String | - |\n| placeholder | 这里是 `input` 占位符 | String | `请选择` |\n| searchPlaceholder | 搜索结果为空的占位符 | String/ReactNode | `请选择` |\n| disabled | 是否禁用 | Boolean | false |\n| multiple | 是否可多选 | Boolean | false |\n| filterable | 是否可搜索，设置`true`组件可以输入文字 | Boolean | false |\n| clearable | 是否可清空单选 | Boolean | false |\n| loading | 是否可清空单选 | Boolean | false |\n| onChange | 是否正在从远程获取数据 | function(option, curruntValue,values[]) | - |\n| onClear | 可清空的单选模式下用户点击清空按钮时触发 | function(state) | - |\n| onSearch | 输入值发生变化时触发，此事件配合 `filterable` 和 `loading` 使用 | function(query) | Null |\n\n### Option\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 指定当前选中的条目，`必填`选项 | String/String[] | - |\n| disabled | 是否禁用 | Boolean | false |\n| label | 选项的标签，若不设置则默认与 `value` 相同，`选填` | String/Number | - |\n"

/***/ })

}]);