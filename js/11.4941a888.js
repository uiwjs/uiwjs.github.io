(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 485:
/***/ (function(module, exports) {

module.exports = "Carousel 走马灯\n===\n\n### 最简单的用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onChange(current){\n    console.log(current);\n  }\n  render() {\n    let style = {\n      textAlign: 'center',\n      height: 160,\n      background: '#b7b7b7',\n      overflow: 'hidden',\n    };\n    const attr = {\n      arrows: true,\n      dots: true,\n      infinite: true,\n      speed: 500,\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n    return (\n      <Carousel easing='linear' {...attr} afterChange={this.onChange} >\n        <div>\n          <div style={style}>1</div>\n        </div>\n        <div>\n          <div style={style}>2</div>\n        </div>\n        <div>\n          <div style={style}>3</div>\n        </div>\n        <div>\n          <div style={style}>4</div>\n        </div>\n      </Carousel>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 垂直显示\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onChange(current){\n    console.log(current);\n  }\n  render() {\n    let style = {\n      textAlign: 'center',\n      height: 160,\n      background: '#b7b7b7',\n      overflow: 'hidden',\n    };\n    return (\n      <div>\n        <Carousel ref={slider => (this.carousel = slider)} vertical afterChange={this.onChange}>\n          <div>\n            <div style={style}>1</div>\n          </div>\n          <div>\n            <div style={style}>2</div>\n          </div>\n          <div>\n            <div style={style}>3</div>\n          </div>\n          <div>\n            <div style={style}>4</div>\n          </div>\n        </Carousel>\n        <div style={{paddingTop:10}}>\n          <Button size=\"small\" onClick={()=>this.carousel.next()}>下一页</Button>\n          <Button size=\"small\" onClick={()=>this.carousel.prev()}>上一页</Button>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 渐显\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onChange(current){\n    console.log(current);\n  }\n  render() {\n    let style = {\n      textAlign: 'center',\n      height: 160,\n      background: '#b7b7b7',\n      overflow: 'hidden',\n    };\n    return (\n      <Carousel effect=\"fade\" afterChange={this.onChange}>\n        <div>\n          <div style={style}>1</div>\n        </div>\n        <div>\n          <div style={style}>2</div>\n        </div>\n        <div>\n          <div style={style}>3</div>\n        </div>\n        <div>\n          <div style={style}>4</div>\n        </div>\n      </Carousel>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 自动切换\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onChange(current){\n    console.log(current);\n  }\n  render() {\n    let style = {\n      textAlign: 'center',\n      height: 160,\n      background: '#b7b7b7',\n      overflow: 'hidden',\n    };\n    // dots: true,\n    return (\n      <Carousel dots autoplay afterChange={this.onChange}>\n        <div>\n          <div style={style}>1</div>\n        </div>\n        <div>\n          <div style={style}>2</div>\n        </div>\n        <div>\n          <div style={style}>3</div>\n        </div>\n        <div>\n          <div style={style}>4</div>\n        </div>\n      </Carousel>\n    )\n  }\n}\n```\n<!--End-->\n\n### 自动切换反转顺序\n\n通过设置`rtl`，反转幻灯片顺序进行自动切换。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onChange(current){\n    console.log(current);\n  }\n  render() {\n    let style = {\n      textAlign: 'center',\n      height: 160,\n      background: '#b7b7b7',\n      overflow: 'hidden',\n    };\n    let arrowBtn = {\n      dots: true,\n      infinite: true,\n      speed: 500,\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n    return (\n      <Carousel autoplay afterChange={this.onChange} {...arrowBtn}>\n        <div>\n          <div style={style}>1</div>\n        </div>\n        <div>\n          <div style={style}>2</div>\n        </div>\n        <div>\n          <div style={style}>3</div>\n        </div>\n        <div>\n          <div style={style}>4</div>\n        </div>\n      </Carousel>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { Carousel } from 'uiw';\n// or\nimport Carousel from 'uiw/lib/carousel';\n```\n\n### Carousel\n\n更多参数可参考：[akiran/react-slick](https://github.com/akiran/react-slick)\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| effect | 动画效果函数，可取 scrollx, fade | String | 'srcollx' |\n| dots | 是否显示面板指示点 | Boolean | `true` |\n| vertical | 垂直显示 | Boolean | `false` |\n| autoplay | 是否自动切换 | Boolean | `false` |\n| rtl | 反转幻灯片顺序配合`autoplay`来使用 | Boolean | `false` |\n| easing | 动画效果 | String | 'linear' |\n| draggable | 拖拽切换 | Boolean | `false` |\n| beforeChange | 切换面板的回调 | function(from, to) | 无 |\n| afterChange | 切换面板的回调 | function(current) | 无 |\n\n### 方法\n\n| 名称 | 描述 | \n| --------- | -------- |\n| goTo(slideNumber) | 切换到指定面板 |\n| next() | 切换到下一面板 |\n| prev() | 切换到上一面板 |\n"

/***/ })

}]);