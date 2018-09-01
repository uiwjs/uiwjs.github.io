(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 522:
/***/ (function(module, exports) {

module.exports = "TimePicker 时间选择器\n===\n\n用于选择或输入日期\n\n### 基本用法\n点击 `TimePicker`，然后可以在浮层中选择或者输入某一时间。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: new Date(2017, 6, 28, 15, 51),\n    }\n  }\n  handleChang(value,date) {\n    console.log('TimePicker:Chang:', value,date)\n  }\n  render() {\n    return (\n      <div>\n        <TimePicker\n          onChange={this.handleChang.bind(this)}\n          disabledHours={['00','01']}\n          disabledMinutes={['01','02']}\n          disabled={false}\n          format=\"H:i:s\"\n          placeholder=\"选择时间de拉！更改\"\n          value={this.state.value}\n        />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 固定时间点\n\n<!--DemoStart--> \n使用 `<TimeSelect>` ，分别通过`star`、`end`和`step`指定可选的起始时间、结束时间和步长，通过`minTime`和`maxTime`来限制时间。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: new Date(2017, 6, 28, 15, 51),\n    }\n  }\n  handleChang(value,date) {\n    console.log('time-select Chang: ', value,date)\n  }\n  render() {\n    return (\n      <div>\n        <TimeSelect\n          start=\"08:30\"\n          step=\"00:15\"\n          end=\"18:30\"\n          minTime=\"9:30\"\n          // hideDisabled={true}\n          onChange={this.handleChang.bind(this)}\n          value={this.state.value}\n          //placeholder=\"选择时间\"\n        />\n        <TimeSelect\n          start=\"08:30\"\n          step=\"00:15\"\n          end=\"18:30\"\n          minTime=\"9:30\"\n          hideDisabled={true}\n          onChange={this.handleChang.bind(this)}\n          value={null}\n          //placeholder=\"选择时间\"\n        />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 固定时间点禁用\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: new Date(2017, 6, 28, 15, 51), }\n  }\n  handleChang(value,date) {\n    console.log('time-select Chang: ', value,date)\n  }\n  render() {\n    return (\n      <TimeSelect\n        start=\"08:30\"\n        step=\"00:15\"\n        end=\"18:30\"\n        disabled={true}\n        minTime=\"9:30\"\n        onChange={this.handleChang.bind(this)}\n        value={this.state.value}\n        placeholder=\"选择时间\"\n      />\n    )\n  }\n}\n```\n<!--End-->\n\n### 固定时间范围\n\n可以通过`hideDisabled={true}`来设置禁用的不显示。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      startDate: new Date(2017, 9, 10, 14, 30),\n      endDate: new Date(2017, 9, 10, 15, 30)\n    }\n  }\n\n  handleStartUpdate(value,startDate) {\n    console.debug('time-select startDate update: ', startDate)\n    this.setState({startDate})\n  }\n\n  handleEndUpdate(value,endDate){\n    console.debug('time-select endDate update: ', endDate)\n    this.setState({endDate})\n  }\n\n  render() {\n    return (\n      <div>\n        <TimeSelect\n          start=\"08:30\"\n          step=\"00:15\"\n          end=\"18:30\"\n          onChange={this.handleStartUpdate.bind(this)}\n          value={this.state.startDate}\n          placeholder=\"选择时间\"\n        />\n        <TimeSelect\n          start=\"08:30\"\n          step=\"00:15\"\n          end=\"18:30\"\n          onChange={this.handleEndUpdate.bind(this)}\n          value={this.state.endDate}\n          minTime={this.state.startDate}\n          placeholder=\"选择时间\"\n        />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 任意时间点\n\n使用 `<TimePicker>`，可以选择任意时间。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: new Date(2017, 6, 28, 15, 51),\n      showTime:'',\n    }\n  }\n  handleChang(value,date) {\n    console.log('value;',value)\n    this.setState({\n      showTime:value,\n      value:date\n    })\n  }\n  render() {\n    const {showTime} = this.state;\n    return (\n      <div>\n        <TimePicker\n          //style={{width:100}}\n          onChange={this.handleChang.bind(this)}\n          disabledHours={['00','01']}\n          disabledMinutes={['01','02']}\n          disabled={true}\n          //hideDisabled={true}\n          format=\"H:i:s\"\n          placeholder=\"选择时间de拉！\"\n          value={new Date(2017, 6, 28, 15, 51)}\n        />\n        <TimePicker\n          //style={{width:100}}\n          size=\"large\" \n          onChange={this.handleChang.bind(this)}\n          disabledHours={['00','01']}\n          disabledMinutes={['01','02']}\n          disabled={false}\n          // hideDisabled={true}\n          format=\"H:i\"\n          placeholder=\"选择时间de拉！更改\"\n          value={this.state.value}\n        />\n        <TimePicker\n          //style={{width:100}}\n          size=\"mini\" \n          onChange={this.handleChang.bind(this)}\n          disabledHours={['00','01']}\n          disabledMinutes={['01','02']}\n          disabled={false}\n          format=\"H:i:s\"\n          placeholder=\"选择时间de拉！更改\"\n          value={this.state.value}\n        />\n        <div style={{padding:\"20px 0 0 0\"}}>\n          选择时间：{showTime}\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { TimePicker, TimeSelect } from 'uiw';\n// or\nimport TimePicker from 'uiw/lib/time-picker';\nimport TimeSelect from 'uiw/lib/time-select';\n```\n\n> 输入框继承 `<Input/>` 组件。支持 Input 的部分属性如`size`,`disabled`, `size`, `autoFocus`, `preIcon`, `defaultValue`\n\n### 公共参数 \n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| className | 选择器类名 | String | - |\n| value | 值 | Date/Null | - |\n| disable | 禁用时间选择器 | Boolean | `false` |\n| placeholder | 值 | String | - |\n| placeholder | 占位内容提示 | String | `false` |\n| hideDisabled | 不可选择的项隐藏 | Boolean | `false` |\n\n### TimeSelect \n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| start | 开始时间 | String | 09:00 |\n| end | 结束时间 | String | 18:00 |\n| step | 间隔时间 | String | 00:30 |\n| minTime | 最小时间 | Date | - |\n| maxTime | 最大时间 | Date | - |\n| onChange | 时间发生变化的回调 time:`9:30`、timeString:`Fri Jul 28 2017 09:45:00 GMT+0800 (CST)` | function(time:String, timeString: String) | - |\n\n### TimePicker \n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| format | 默认显示时分秒，可以定义`H:i`只显示十分 | String | `H:i:s` |\n| disabledHours | 禁止选择部分`小时`选项 | Array | [] |\n| disabledMinutes | 禁止选择部分`分钟`选项 | Array | [] |\n| disabledSeconds | 禁止选择部分`秒`选项 | String | [] |\n| onChange | 时间发生变化的回调 time:`9:30`、timeString:`Fri Jul 28 2017 09:45:00 GMT+0800 (CST)` | function(time:String, timeString: String) | - |\n"

/***/ })

}]);