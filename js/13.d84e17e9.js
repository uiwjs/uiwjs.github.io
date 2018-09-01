(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 487:
/***/ (function(module, exports) {

module.exports = "Checkbox 多选框\n===\n\n一组备选项中进行多选\n\n### 基础用法\n\n单独使用可以表示两种状态之间的切换，半选中只是样式上的表现。\n\n<!--DemoStart--> \n简单的Checkboxs，使用`checked`切换选中状态。\n```js\nclass Demo extends Component {\n  log(e,value){\n    console.log(`checked = ${e.target.checked} - ${value}`);\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox onChange={this.log.bind(this)}>未选中</Checkbox>\n        <Checkbox onChange={this.log.bind(this)} checked >选中</Checkbox>\n        <Checkbox onChange={this.log.bind(this)} indeterminate >半选中</Checkbox>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 不可用(禁用)\n\n通过设置`disabled`属性来禁用多选框。\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  log(e,value){\n    console.log(`checked = ${e.target.checked} - ${value}`);\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox disabled onChange={this.log.bind(this)}>未选中禁用</Checkbox>\n        <Checkbox disabled onChange={this.log.bind(this)} checked>选中禁用</Checkbox>\n        <Checkbox disabled onChange={this.log.bind(this)} indeterminate>半选中禁用</Checkbox>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 切换半选中\n\n联动 `Checkbox`。\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked3: true,\n      disabled3: true,\n    }\n  }\n  handleChange(e,value){\n    console.log(`checked = ${e.target.checked} - ${value}`);\n    this.setState({\n      checked3: value,\n    });\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox checked={this.state.checked3} disabled={this.state.disabled3} \n          onChange={this.handleChange.bind(this)}>\n          {`${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`}\n        </Checkbox>\n        <div style={{padding:\"10px 0 0 0\"}}>\n          <Button\n            size=\"mini\"\n            onClick={() => {\n              this.setState({ checked3: !this.state.checked3 });\n            }}\n          >\n            {!this.state.checked3 ? 'Check' : 'Uncheck'}\n          </Button>\n          <Button\n            style={{ marginLeft: '10px' }}\n            size=\"mini\"\n            onClick={() => {\n              this.setState({ disabled3: !this.state.disabled3 });\n            }}\n          >\n            {!this.state.disabled3 ? 'Disable' : 'Enable'}\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### Checkbox 组\n\n方便的从数组生成 `Checkbox` 组。\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked3: true,\n      disabled3: true,\n    }\n  }\n  render() {\n    const plainOptions = ['Apple', 'Pear', 'Orange'];\n    const options = [\n      { value: 'Apple' },\n      { value: 'Pear' },\n      { value: 'Orange' },\n    ];\n    const optionsLabel = [\n      { value: 'Apple', label: '苹果', disabled: true },\n      { value: 'Pear', label: '梨' },\n      { value: 'Orange', label: '橘子' },\n    ];\n    const optionsWithDisabled = [\n      { value: 'Apple' },\n      { value: 'Pear' },\n      { value: 'Orange', disabled: false },\n    ];\n    const CheckboxGroup = Checkbox.Group;\n    return (\n      <div>\n        <CheckboxGroup \n          options={plainOptions} \n          checkedValues={['Apple']} \n          onChange={(e,checkedValues,value,checked,option)=>{\n            console.log('checked = ', checkedValues,value,option);\n          }} \n        />\n        <Divider />\n        <CheckboxGroup \n          options={optionsLabel} \n          checkedValues={['Pear']} \n          onChange={(e,checkedValues,value,checked,option)=>{\n            console.log('checked = ', checkedValues,value,option);\n          }} \n        />\n        <Divider />\n        <CheckboxGroup \n          options={options} \n          checkedValues={['Apple']} \n          onChange={(e,checkedValues,value,checked,option)=>{\n            console.log('checked = ', checkedValues,option);\n          }} \n        />\n        <Divider />\n        <CheckboxGroup \n          options={optionsWithDisabled} \n          disabled \n          checkedValues={['Apple']} \n          onChange={(e,checkedValues)=>{\n            console.log('checked = ', checkedValues);\n          }} \n        />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 全选\n\n在实现全选效果时，你可能会用到 `indeterminate` 属性。\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked3: true,\n      disabled3: true,\n\n      checkedList: ['Apple', 'Pear'],\n      indeterminate: true,\n      checkAll: false,\n\n      plainOptions:['Apple', 'Pear', 'Orange']\n    }\n  }\n  onChange(e,checkedList,value,checked){\n    const {plainOptions} = this.state\n    console.log(\"checkedList:\",checkedList,value,checked,plainOptions)\n    this.setState({\n      checkedList,\n      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),\n      checkAll: checkedList.length === plainOptions.length,\n    });\n  }\n  render() {\n    const defaultCheckedList = ['Apple', 'Orange'];\n    const {plainOptions} = this.state\n    const options = [\n      { value: 'Apple' },\n      { value: 'Pear' },\n      { value: 'Orange' },\n    ];\n    const optionsWithDisabled = [\n      { value: 'Apple' },\n      { value: 'Pear' },\n      { value: 'Orange', disabled: false },\n    ];\n    const CheckboxGroup = Checkbox.Group;\n    return (\n      <div>            \n        <div style={{ borderBottom: '1px solid #E9E9E9',margin:\"0 0 10px 0\",padding:\"0 0 10px 0 \"}}>\n          <Checkbox\n            indeterminate={this.state.indeterminate}\n            onChange={(e,checked) => {\n              console.log(\"--->\",e,checked)\n              this.setState({\n                checkedList: e.target.checked ? plainOptions : [],\n                indeterminate: false,\n                checkAll: e.target.checked,\n              });\n            }}\n            checked={this.state.checkAll}\n          >\n            Check all\n          </Checkbox>\n        </div>\n\n        <CheckboxGroup \n          options={plainOptions} \n          checkedValues={this.state.checkedList} \n          onChange={this.onChange.bind(this)} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 受控的\n\n联动 checkbox。\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      indeterminate: true,\n      plainOptions: ['Apple', 'Pear', 'Orange'],\n      checkedValues: ['Apple']\n    }\n  }\n  log(e,value){\n    console.log(`checked = ${e.target.checked} - ${value}`);\n  }\n  handleChange(){\n    console.log(\"!this.state.indeterminate::\", !this.state.indeterminate)\n    this.setState({\n      indeterminate:!this.state.indeterminate\n    })\n  }\n  handleGroupChange() {\n    this.setState({\n      checkedValues: this.state.checkedValues.length === 0 ? this.state.plainOptions : [],\n    })\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox.Group \n          options={this.state.plainOptions} \n          checkedValues={this.state.checkedValues} \n          onChange={(e,checkedValues,value,checked)=>{\n            this.setState({checkedValues});\n          }} \n        />\n        <Button size=\"mini\" onClick={this.handleGroupChange.bind(this)}>\n          {this.state.checkedValues.length === 0 ? '全部选中' : '全部取消选中'}\n        </Button>\n        <Divider />\n        <Checkbox indeterminate={this.state.indeterminate} onChange={this.log.bind(this)}>半选中</Checkbox>\n        <Button size=\"mini\" onClick={this.handleChange.bind(this)}>切换半选中</Button>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## API\n\n### Checkbox Attributes\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| options | 指定当前是否选中 | Boolean | false |\n| disabled | 禁用 | Boolean | false |\n| onChange | 变化时回调函数 | Function(e:Event, checked:Boolean) | - |\n| checked | 指定当前是否选中 | Boolean | false |\n| indeterminate | 半选中，只负责样式控制 | Boollean | false |\n\n### Checkbox Group Attributes\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| options | 指定可选 | string[],object[] | [] |\n| checkedValues | 默认选中的选 | string[] | [] |\n| onChange | 变化时回调函数 | Function(e:Event,checkedValues:Array, value:String, checked:Boolean, option) | - |\n| disabled | 禁用所有，[options]中设置，disabled=false 取消禁用 | Boolean | false |\n\n### Checkbox Group Options\n\nOptions 是个数组，里面可以是对象，也可以是字符串，为字符串，默认界面上显示的和 `value` 是一样的，对象是分界面展示的 `label` 和 `value` 值。\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| value | CheckBox值，必填 | string | - |\n| label | 界面上展示的文本，此值没有，展示 `value` 值，选填 | string | - |\n| disabled | 禁用所有，[options]中设置，disabled=false 取消禁用 | Boolean | false |\n"

/***/ })

}]);