(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ 602:
/***/ (function(module, exports) {

module.exports = "Hotkeys 快捷键\n===\n\n用于捕获键盘输入和输入的组合键，基于 [hotkeys.js](https://github.com/jaywcjlove/hotkeys) 封装的组件。也可以单独使用[react-hotkeys](https://github.com/jaywcjlove/react-hotkeys)\n\n### 基础用法\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    output: `Hello, I am a component that listens to keydown and keyup of a. <br/> \n    你好，我是一个监听keydown和keyup的组件。<br/> \n    请摁下【shift+a】或者【alt+s】是一下效果`,\n    keyout:\"\"\n  }\n}\nonKeyUp(keyName, e, handle) {\n  console.log(\"test:onKeyUp\", e, handle)\n  this.setState({\n    keyout: `onKeyUp ${keyName}`,\n  });\n}\nonKeyDown(keyName, e, handle) {\n  console.log(\"test:onKeyDown\", keyName, e, handle)\n  this.setState({\n    keyout: `onKeyDown ${keyName}`,\n  });\n}\nrender() {\n  return (\n    <Hotkeys \n      keyName=\"shift+a,alt+s\" \n      onKeyDown={this.onKeyDown.bind(this)}\n      onKeyUp={this.onKeyUp.bind(this)}\n    >\n      <div style={{ padding: \"20px\" }} dangerouslySetInnerHTML={{__html:`${this.state.output}<br/>${this.state.keyout}`}} />\n    </Hotkeys>\n  )\n}\n```\n<!--End-->\n\n\n## API\n\n### Hotkeys\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| keyName | 快捷键组合，也可以是单个键监听，例如：`shift+a,alt+s,enter` | String | - |\n| onKeyDown | 键盘摁下去事件 | Function(keyName, e, handle) | - |\n| onKeyUp | 键盘弹起事件 | Function(keyName, e, handle) | - |\n\n### keyName\n\n支持的键 `⇧`, `shift`, `option`, `⌥`, `alt`, `ctrl`, `control`, `command`, `⌘`。 \n\n`⌘` Command()  \n`⌃` Control  \n`⌥` Option(alt)  \n`⇧` Shift  \n`⇪` Caps Lock(大写)   \n~~`fn` 功能键就是fn(不支持)~~  \n`↩︎` return/enter  \n`space` 空格键\n\n\n## 修饰键判断\n\n可以对下面的修饰键判断 `shift` `alt` `option` `ctrl` `control` `command`，特别注意`+`和`=`键值相同，组合键设置`⌘+=`\n\n```js\nonKeyDown(keyName, e, handle) {\n  console.log(\"test:onKeyDown\", keyName, e, handle)\n  if(e.shiftKey) console.log('大哥你摁下了 shift 键！');\n  if(e.ctrlKey) console.log('大哥你摁下了 ctrl 键！');\n  if(e.altKey) console.log('大哥你摁下了 alt 键！');\n}\n```\n"

/***/ })

}]);