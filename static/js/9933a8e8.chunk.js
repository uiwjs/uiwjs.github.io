(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{607:function(n,o){n.exports="Color 色彩\n===\n\n## 主要颜色\n\n主色以象征广阔海洋的湖蓝色作为主色调，它给人以年轻、鲜明、清爽的形象多展现出来，湖蓝色是一种纯洁的颜色，象征着大海。\n（ 取色含义：我们致力于创新，积极并且不断努力，这正是我们团队的精神追求。）\n\n\x3c!--DemoStart,bgWhite,noCode--\x3e \n```js\nconst colors = [\n  { name: 'Light Blue', cn: '主要-浅蓝色', color: '#5BB5F4', des: '通常用于按钮、及任何修饰元素', },\n  { name: 'Blue', cn: '主要-蓝色', color: '#2EA3F4', des: '通常用于按钮、及任何修饰元素', },\n  { name: 'Dark Blue', cn: '主要-深蓝色', color: '#008EF0', des: '通常用于按钮、及任何修饰元素', },\n];\nconst styles = {\n  flex: 1, height: 63, maxWidth: 120, color: '#fff', textAlign: 'center',\n  display: 'flex', justifyContent: 'center', flexDirection: 'column',\n};\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div>{item.name}</div>\n          <div>{item.color}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 辅助颜色\n\n这些亮丽的辅助色多用于按钮，提示，警告等修饰元素，以及一些侧边修饰的元素上。\n\n\x3c!--DemoStart,bgWhite,noCode--\x3e \n```js\nconst colors = [\n  { name: 'Green', cn: '成功-绿色', color: '#28a745' },\n  { name: 'Blue', cn: '主要-蓝色', color: '#008EF0' },\n  { name: 'Cyan', cn: '信息-青色', color: '#1EABCD' },\n  { name: 'Navy', cn: '导航-藏青', color: '#393E48' },\n  { name: 'Yellow', cn: '警告-黄色', color: '#ffc107' },\n  { name: 'Orange', cn: '提醒-橙色', color: '#F95C2B' },\n  { name: 'Red', cn: '危险-红色', color: '#dc3545' },\n];\nconst styles = {\n  position: 'relative', minWidth: 80,\n  flex: 1, height: 83, color: '#fff', textAlign: 'center',\n  display: 'flex', flexDirection: 'column', justifyContent: 'center',\n};\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div style={{position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'}}>{item.color}</div>\n          <div>{item.name}</div>\n          <div>{item.cn}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 极简中性色\n\n极简中性色是白色从灰色再到深灰色的一个过渡颜色，可以搭配文字以及任何元素，以这种色调来缓解视觉疲劳，低调内敛！\n\n\x3c!--DemoStart,bgWhite,noCode--\x3e \n```js\nconst colors = [\n  { name: '白色', color: '#FFFFFF', fontColor: '#6F6F6F' },\n  { name: '背景', color: '#F6F6F6', fontColor: '#6F6F6F' },\n  { name: '分割线', color: '#F2F2F2', fontColor: '#6F6F6F' },\n  { name: '边框', color: '#EEEEEE', fontColor: '#6F6F6F' },\n  { name: '失效', color: '#EAEAEA', fontColor: '#6F6F6F' },\n  { name: '辅助', color: '#DDDDDD', fontColor: '#6F6F6F' },\n  { name: '正文', color: '#C2C2C2' },\n  { name: '图标', color: '#B9B9B9' },\n  { name: '文本', color: '#A5A5A5' },\n  { name: '标题', color: '#6E6E6E' },\n];\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      const styles = {\n        flex: 1, height: 63, color: '#fff', textAlign: 'center', minWidth: 80,\n        flexDirection: 'column', display: 'flex', justifyContent: 'center',\n      }\n      if (item.fontColor) {\n        styles.color = item.fontColor;\n      }\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div>{item.name}</div>\n          <div>{item.color}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 背景色\n\n这内置的几种颜色可以用于各种元素中，比如：导航，按钮，徽章等背景中。\n\n\x3c!--DemoStart,bgWhite,noCode--\x3e \n```js\nconst colors = [\n  { name: '警告-黄色', backgroundColor: '#ffc107', des: 'warning', },\n  { name: '提醒-橙色', backgroundColor: '#F95C2B', des: 'remind', },\n  { name: '危险-红色', backgroundColor: '#dc3545', des: 'danger', },\n  { name: '导航-藏青', backgroundColor: '#393E48', des: 'NavMenu', },\n  { name: '主要-蓝色', backgroundColor: '#2EA3F4', des: 'Primary', },\n  { name: '成功-绿色', backgroundColor: '#09C62C', des: 'success', },\n  { name: '背景-中灰', backgroundColor: '#EAEAEA', des: 'background', color: '#6F6F6F' },\n];\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      const styles = {\n        padding: '21px 0 7px 5px', minWidth: 100,\n        position: 'relative', flex: 1, height: 63, color: '#fff',\n        flexDirection: 'column', display: 'flex', justifyContent: 'center',\n      }\n      const colorFontSty = {position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'};\n      if (item.color) {\n        styles.color = item.color;\n        colorFontSty.color = item.color;\n      }\n      return (\n        <div key={idx} style={{ background: item.backgroundColor, ...styles }}>\n          <div style={colorFontSty}>{item.backgroundColor}</div>\n          <div>{item.name}</div>\n          <div style={{ fontSize: 12 }}>{item.des}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n"}}]);