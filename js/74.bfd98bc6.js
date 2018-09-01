(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ 548:
/***/ (function(module, exports) {

module.exports = "Icon 图标\n===\n\n语义化的矢量图形，内置的图标属于UI框架常用图形字体。icon字体以及样式，被抽离到一个新的仓库 [uiw icon](https://uiw-react.github.io/icons/) ，`uiw`去依赖 [uiw-iconfont](https://github.com/uiw-react/icons)，这个仓库主要是维护一套svg图片，并将svg图片转换为 `*.svg` `*.ttf` `*.woff` `*.eot` 等字体及相关文件并发布到 [npm](https://www.npmjs.com/package/uiw-iconfont) 上去。\n\n### 如何使用\n\n使用`<Icon />`组件，指定图标对应的`type`属性，示例代码：\n\n```html\n<Icon type=\"minus\" />\n```\n\n渲染后为：\n\n```html\n<i class=\"w-icon-date\"></i>\n```\n\n示例如下:\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Icon type=\"arrow-down\" />\n        <Icon type=\"minus\" />\n        <Icon type=\"plus\" />\n        <Icon type=\"check\" />\n        <Icon type=\"close\" />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 添加自己的图标字体方法\n\n默认建议使用 `svg` 来制作图标，如果使用字体文件，需要添加字体文件，并在 `css` 写符合规范的样式。\n\n`icon` 名字需要命名规范，必须加上前缀 `.w-icon-{图标名字}` 。\n\n```css\n@font-face {\n  font-family: \"iconfont\";\n  src: url('iconfont.eot'); /* IE9*/\n  src: url('iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */\n  url('iconfont.woff') format('woff'), /* chrome, firefox */\n  url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  url('iconfont.svg') format('svg'); /* iOS 4.1- */\n}\n\n[class^=\"w-icon-uiw-\"], [class*=\" w-icon-uiw-\"] {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.w-icon-uiw-wxbgongju:before { content: \"\\e61b\"; }\n.w-icon-uiw-wxbmingxingdianpu:before { content: \"\\e61c\"; }\n```\n\n上面写好CSS之后在组件中引用，就可以通过 `Icon` 组件来调用了，例如上面定义了两个图标使用方法如下\n\n```js\n<Icon type=\"uiw-wxbgongju\" />\n<Icon type=\"uiw-wxbmingxingdianp\" />\n```\n\n注意：这里 `.w-icon-` 是当前默认引用的字体文件，`w-icon-uiw-` 是引用自己制作的字体文件，来覆盖默认的字体文件，就当成一个新的作用域。\n\n### 图标的命名规范\n\n我们为每个图标赋予了语义化的命名，命名规则如下:\n\n> [形状?]-[图标名]-[描线?]-[方向?]  \n> 方向：`down`、`up`、`left`、`right`  \n> 描线：`-o` 图标添加边框描线\n> 默认：`w-icon-` 默认引用的字体文件作用域  \n> 自定定义：`w-icon-uiw-` 自定定义作用域  \n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Icon type=\"circle-close\" />  图标名称：circle-close，[circle圈]-[关闭close]\n        <br/>\n        <br/>\n        <Icon type=\"circle-close-o\" /> 图标名称：circle-close-o，[circle圈]-[关闭close]-[o描线]\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### API\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| spin | 是否有旋转动画 |  Boolean | `false` |\n| style | 设置图标的样式，例如 fontSize 和 color |  Object | - |\n| type | 图标的名称 |  String | - |\n\n## 实例\n\n> 点击图标复制代码。\n\n### 图标旋转实例\n\n通过设置参数`spin={true}`来设置图标旋转。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = [\"loading\",'reload'];\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" spin />`} tooltip=\"复制成功！\">\n                    <Icon type={item} spin style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 方向性图标\n\n<!--DemoStart--> \n```js\nconst iconList = [\n  'caret-down', 'arrow-down','down-square-o','down-square',  'down-circle-o', 'down-circle',\n  'caret-up','arrow-up', ,'up-square-o', 'up-square','up-circle-o','up-circle',\n  'caret-left',  'arrow-left','left-square-o','left-square',  'left-circle-o', 'left-circle',\n  'caret-right','arrow-right','right-square-o', 'right-square','right-circle-o', 'right-circle',\n  'shrink','arrows-alt','d-arrow-left','d-arrow-right','enter', \n\n  'rollback', 'd-caret','backward','forward',  'logout', 'login',  'swap-right', 'swap', \n  'verticle-left', 'verticle-right','play-circle-o',  'play-circle','menu-fold', 'menu-unfold',  \n]\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 提示建议性图标\n\n<!--DemoStart--> \n```js\nconst iconList = [ \n  'smile-o', 'smile','frown-o', 'frown','meh', 'meh-o',\n  'pause','pause-circle', 'pause-circle-o', 'information', \"information-o\", 'warning-o', 'warning',\n]\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 符号\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = [ \n      \"plus\", 'plus-circle-o','plus-circle', 'plus-square', 'plus-square-o', \"question-circle-o\", \n      \"minus\", 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o',\"question-circle\", \n      \"close\", \"circle-close-o\", \"circle-close\",'close-square', 'close-square-o', \"asterisk\", \n      \"check\", \"circle-check-o\", \"circle-check\",'check-square','check-square-o', \"copyright\",\n    ]\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 文件\n\n<!--DemoStart-->  \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = [ \n      'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'file-pdf',\n      'folder-add', 'folder-open', 'paper-clip', \n    ]\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 其它\n\n<!--DemoStart-->  \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = [ \n      'heart-off', 'heart-on', 'star-on', 'star-off','lock', 'unlock','dashboard',\n      'area-chart', 'bar-chart', 'dot-chart','pie-chart', \n      'dislike-o', 'like-o','loading', 'reload','appstore', 'appstore-o',\n      'tag', 'tag-o','tags','tags-o', 'setting','setting-o','map','table','qrcode','barcode','printer',\n      'cloud-upload','cloud-upload-o', 'cloud-download','cloud-download-o', 'download','message','message-o',\n      'user', 'usergroup-add', 'zoom-in', 'zoom-out','time', 'time-o',\n      \"bell\", 'camera-o', 'coffee', 'document', 'delete', 'date', 'edit',  'eye-o', 'environment-o', 'filter', 'global', 'inbox', 'home', 'laptop', 'link',  'menu', 'mobile', 'more', 'notification', 'picture', 'picasa', 'pay-circle-o', 'pay', 'poweroff',  'save', 'safety', 'search', 'shopping-cart', 'share',   'upload', 'verification', 'video-camera', 'wifi', \n    ]\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 品牌标识\n\n<!--DemoStart-->  \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = ['uiw', 'windows', \"linux\", 'apple', 'facebook', 'twitter', 'adobe', \"baidu\", \"ali-pay\", 'android-o', 'android','reddit', 'github', 'github-o', \"aliwangwang\",   \"dingding\", \"foursquare\", \"linkedin\", \"pinterest\", \"qq\",  \"weibo\", \"taobao\", \"weixin\", 'css3', 'html5', ]\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 浏览器图标\n\n<!--DemoStart-->  \n```js\nclass Demo extends Component {\n  render() {\n    const {Row,Col} = Layout;\n    const styleItem = {textAlign:\"center\",padding:\"20px 10px\",background: \"#f4f4f4\",marginBottom:10};\n    const iconStyle = {color:\"#525252\"};\n    const iconList = [\n      \"chrome\", \"safari\", \"firefox\", \"opera\", \"ie\", \n    ]\n    return (\n      <div>\n        <Row gutter=\"10\">\n        {\n          iconList.map((item,idx) => {\n            return (\n              <Col key={idx} xs=\"8\" sm=\"6\" md=\"4\" lg=\"4\">\n                <div style={styleItem}>\n                  <CopyToClipboard style={iconStyle} text={`<Icon type=\"${item}\" />`} tooltip=\"复制成功！\">\n                    <Icon type={item} style={{fontSize:18,marginBottom:10}}/>\n                    <div>{item}</div>\n                  </CopyToClipboard>\n                </div>\n              </Col>\n            )\n          }) \n        }\n        </Row>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n"

/***/ })

}]);