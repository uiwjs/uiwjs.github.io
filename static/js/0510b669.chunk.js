(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1153:function(n,o){n.exports="Affix 图钉\n===\n\n使用图钉，可以将内容固定在屏幕可视范围，并且不随页面的滚动而滚动，常用于菜单等。\n\n### 基本用法\n \n\x3c!--DemoStart,bgWhite,noScroll,codePen--\x3e \n```js\nimport { Affix, Button } from 'uiw';\n\nReactDOM.render(\n  <Affix>\n    <Button type=\"primary\">当按钮距离顶部距离为 0，按钮被钉在顶部</Button>\n  </Affix>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n\n### 钉在底部\n\n这个实例需要你缩小窗口高度，就可以测试看效果啦。\n\n\x3c!--DemoStart,bgWhite,noScroll,codePen--\x3e \n```js\nimport { Affix, Button } from 'uiw';\n\nReactDOM.render(\n  <Affix offsetBottom={10} onChange={(affixed) => {\n    console.log('affixed::', affixed);\n  }}>\n    <Button type=\"primary\">当按钮距离底部距离为 0，按钮被钉在底部</Button>\n  </Affix>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| offsetBottom | \t距离窗口底部达到指定偏移量后触发 | Number| - |\n| offsetTop | \t距离窗口顶部达到指定偏移量后触发 | Number| - |\n| onChange | \t\t固定状态改变时触发的回调函数 | Function(affixed) | - |"}}]);