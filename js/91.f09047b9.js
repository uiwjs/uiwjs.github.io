(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ 565:
/***/ (function(module, exports) {

module.exports = "Slider 滑块\n===\n\n通过拖动滑块在一个固定区间内进行选择\n\n### 基本用法\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 20\n  }\n}\nrender() {\n  return (\n    <div>\n      <Slider value={this.state.value} \n        onChange={(value)=>console.log(`Value: ${value}`)} \n        onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 禁用\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 50\n  }\n}\nrender() {\n  return (\n    <div>\n      <Slider disabled value={this.state.value} \n        onChange={(value)=>console.log(`Value: ${value}`)} \n        onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 设置颜色\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n      <Slider  \n        color=\"#57a2ff\"\n        value={50} \n        onChange={(value)=>console.log(`Value: ${value}`)} \n        onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n      <Slider  \n        color=\"#d700da\"\n        value={20} \n        onChange={(value)=>console.log(`Value: ${value}`)} \n        onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 垂直方向\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 20\n  }\n}\nrender() {\n  return (\n    <div style={{height:200}}>\n      <Slider disabled style={{display:'inline-block'}} vertical value={this.state.value} \n        onChange={(value)=>console.log(`Value: ${value}`)} \n        onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n      <Slider style={{display:'inline-block'}} vertical value={70} \n        //onChange={(value)=>console.log(`Value: ${value}`)} \n        //onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n      />\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 离散值\n\n选项可以是离散的。\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 0\n  }\n}\nrender() {\n  return (\n    <div>\n      <div style={{height:30}}>\n        <Slider value={20}\n          marks={{\n            0:\"0°C\",\n            10:\"10°C\",\n            20:\"20°C\",\n            100:{\n              style: {\n                color: '#f50',\n              },\n              label: <strong>100°C</strong>,\n            },\n          }} \n          step={10}\n          dots={true}\n          onChange={(value)=>{\n            this.setState({\n              value:value\n            })\n            console.log(`Value: ${value}`)\n          }} \n          onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n      <div style={{height:30}}>\n        <Slider value={30}\n          marks={true} \n          step={10}\n          onChange={(value)=>{\n            this.setState({\n              value:value\n            })\n            console.log(`Value: ${value}`)\n          }} \n          onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n      <div style={{height:200,width:100,display:'inline-block'}}>\n        <Slider value={40}\n          marks={{\n            20:\"20°C\"\n          }} \n          vertical\n          step={10}\n          onChange={(value)=>{\n            this.setState({\n              value:value\n            })\n            console.log(`Value: ${value}`,value)\n          }} \n          onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n      <div style={{height:200,display:'inline-block'}}>\n        <Slider \n          value={80}\n          marks={{\n            0:\"0°C\",\n            20:\"20°C\",\n            40:\"40°C\",\n            60:\"60°C\",\n            80:\"80°C\",\n            100:{\n              style: {\n                color: '#f50',\n              },\n              label: <strong>100°C</strong>,\n            },\n          }} \n          vertical\n          step={20}\n          dots={true}\n          onChange={(value)=>{\n            this.setState({\n              value:value\n            })\n            console.log(`Value: ${value}`)\n          }} \n          onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 区间范围选择\n\n选择某一数值范围。\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n      <div style={{height:60}}>\n        <Slider value={[0,30]}\n          marks={{\n            [-50]:{\n              style: { color: '#007cce'},\n              label: \"-50°C\",\n            },\n            [-40]:{\n              style: { color: '#0094f5'},\n              label: \"-40°C\",\n            },\n            [-30]:\"-30°C\",\n            [-20]:\"-20°C\",\n            [-10]:\"-10°C\",\n            0:\"0°C\",\n            10:\"10°C\",\n            20:\"20°C\",\n            30:{\n              style: { color: '#f50'},\n              label: \"30°C\",\n            },\n            40:\"40°C\",\n            50:\"50°C\",\n          }} \n          max={50}\n          min={-50}\n          step={10}\n          dots={true}\n          onChange={(value)=>{\n            console.log(`Value: ${value}`)\n          }} \n          //onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n      <div style={{height:200,width:150,display:'inline-block'}}>\n        <Slider value={[0,30]}\n          marks={{\n            0:\"0°C\",\n            10:\"10°C\",\n            20:\"20°C\",\n            30:{\n              style: {\n                color: '#f50',\n              },\n              label: <strong>30°C</strong>,\n            },\n            40:\"40°C\",\n            50:\"50°C\",\n          }} \n          max={50}\n          vertical\n          step={10}\n          dots={true}\n          onChange={(value)=>{\n            console.log(`Value: ${value}`)\n          }} \n          //onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n      <div style={{height:200,display:'inline-block'}}>\n        <Slider value={[0,30]}\n          marks={{\n            [-50]:{\n              style: { color: '#007cce'},\n              label: \"-50°C\",\n            },\n            [-40]:{\n              style: { color: '#0094f5'},\n              label: \"-40°C\",\n            },\n            [-30]:\"-30°C\",\n            [-20]:\"-20°C\",\n            [-10]:\"-10°C\",\n            0:\"0°C\",\n            10:\"10°C\",\n            20:\"20°C\",\n            30:{\n              style: { color: '#f50'},\n              label: \"30°C\",\n            },\n            40:\"40°C\",\n            50:\"50°C\",\n          }} \n          max={50}\n          min={-50}\n          vertical\n          step={10}\n          dots={true}\n          onChange={(value)=>{\n            console.log(`Value: ${value}`)\n          }} \n          //onDragChange={(value)=>console.log(`Drag value: ${value}`)} \n        />\n      </div>\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n## API\n\n### Slider\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 选择的数值，为数组时即可开启范围选择，并且指定范围 | Number/Number[] | `0` |\n| min | 最小值 | Number | `0` |\n| max | 最大值 | Number | `100` |\n| disabled | 是否禁用 | Boolean | `false` |\n| step | 间步长度 | Number | `1` |\n| dots | 是否只能拖拽到刻度上 | Boolean | `false` |\n| marks | 刻度标记，`key` 的类型必须为 `number` 且取值在闭区间 `min`, `max` 内，每个标签可以单独设置样式，当值为`Boolean`值时表示是否显示刻度 | Object/Boolean | - |\n| tooltip | 是否显示提示 | Boolean | `ture` |\n| vertical | 值为 `true` 时，`Slider` 为垂直方向 | Boolean | `false` |\n| onDragChange | 拖拽，值改变时触发 | Function(value) | - |\n| onChange | 值改变时触发 | Function(value) | - |"

/***/ })

}]);