(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[87],{1364:function(t,e,n){"use strict";n.r(e),e.default="formatter\n---\n\n[![](https://img.shields.io/github/issues/uiwjs/date-formatter.svg)](https://github.com/uiwjs/date-formatter/issues) [![](https://img.shields.io/github/forks/uiwjs/date-formatter.svg)](https://github.com/uiwjs/date-formatter/network) [![](https://img.shields.io/github/stars/uiwjs/date-formatter.svg)](https://github.com/uiwjs/date-formatter/stargazers) [![](https://img.shields.io/github/release/uiwjs/date-formatter.svg)](https://github.com/uiwjs/date-formatter/releases) [![](https://img.shields.io/npm/v/@uiw/formatter)](https://www.npmjs.com/package/@uiw/formatter) [![](https://img.shields.io/bundlephobia/min/@uiw/formatter)](https://www.npmjs.com/package/@uiw/formatter) ![](http://jaywcjlove.github.io/sb/status/no-dependencies.svg) [![Coverage Status](https://coveralls.io/repos/github/uiwjs/date-formatter/badge.svg?branch=master)](https://coveralls.io/github/uiwjs/date-formatter?branch=master)\n\nGet a formatted date. [Demo preview](https://codepen.io/jaywcjlove/pen/zbZKmq).\n\n### Install\n\n```bash\n$ npm install --save @uiw/formatter\n```\n\n### Usage\n\n```js\nimport formatter from '@uiw/formatter';\n\nconsole.log(formatter());\n//=> 2019-03-07\n\nconsole.log(formatter.utc());\n//=> 2019-03-07\n\nconsole.log(formatter('YYYY\u5e74MM\u6708DD\u65e5', new Date(2019, 3, 7)))\n//=> 2019\u5e7404\u670807\u65e5\nconsole.log(formatter('YYYY\u5e74MM\u6708DD\u65e5 16:30:29', new Date(2019, 3, 7, 16, 30, 29)))\n//=> 2019\u5e7404\u670807\u65e5 16:30:29\n\n\nconsole.log(formatter('YYYY'));\n//=> 2019\nconsole.log(formatter.utc('YYYY'));\n//=> 2019\n```\n\nOr manually download and link **formatter.js** in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/@uiw/formatter):\n\n```html\n<div id=\"date\"></div>\n<script src=\"https://unpkg.com/@uiw/formatter/dist/formatter.min.js\"><\/script>\n<script>\n  document.getElementById('date').innerHTML = formatter();\n<\/script>\n```\n\nThe above [example preview](https://codepen.io/jaywcjlove/pen/zbZKmq).\n\n### timeZoneConverter\n\nResolve changes in time zone, resulting in inaccurate display server time\n\n```js\nfunction timeZoneConverter(date, timeZone) {\n  const oldDate = new Date(date);\n  const newDate = new Date();\n  const stamp = oldDate.getTime();\n  if (!timeZone) return oldDate;\n  return (isNaN(timeZone) && !timeZone)\n    ? oldDate :\n    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));\n}\ntimeZoneConverter(new Date(1434701732*1000), 8)\n```\n\n## API\n\n```js\nformatter(rule: String, date: Date, utc: Boolean);\nformatter.utc(rule: String, date: Date);\n```\n\n## Supported Patterns\n\n| rule | Description | \u4e2d\u6587\u8bf4\u660e | E.g |\n|--------- |-------- |--------- |-------- |\n| `YYYY` | full year | \u5e74 | `2019` |\n| `MM` | month | \u6708 | `02` |\n| `DD` | day | \u5929 | `05` |\n| `HH` | hours | \u65f6 | `12` |\n| `mm` | minutes | \u5206\u949f | `59` |\n| `ss` | seconds | \u79d2 | `09` |\n| `ms` | milliseconds | \u6beb\u79d2 | `532` |\n"}}]);
//# sourceMappingURL=87.97e75d29.chunk.js.map