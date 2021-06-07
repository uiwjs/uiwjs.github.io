(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[105],{1323:function(n,e,i){"use strict";i.r(e),e.default="Divider \u5206\u5272\u7ebf\n===\n\n\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf\u3002\n\n```jsx\nimport { Divider } from 'uiw';\n// or\nimport Divider from '@uiw/react-divider';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n\u57fa\u7840\u5b9e\u4f8b\u5305\u542b\u865a\u7ebf\u5206\u5272\u7ebf\u3001\u5e26\u6587\u672c\u7684\u5206\u5272\u7ebf\u3001\u5b9e\u7ebf\u5206\u5272\u7ebf\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Divider } from 'uiw';\n\nReactDOM.render(\n  <div style={{ maxWidth: 530 }}>\n    <div>\u5468\u661f\u9a70\uff1a \u9999\u6e2f\u6f14\u5458\u3001\u5bfc\u6f14\u3002\u7956\u7c4d\u6d59\u6c5f\u5b81\u6ce2\uff0c1962\u5e746\u670822\u65e5\u751f\u4e8e\u9999\u6e2f\uff0c\u4ed6\u662f\u9999\u6e2f\u6700\u4e3a\u91cd\u8981\u7684\u559c\u5267\u7247\u6f14\u5458\u4e0e\u7f16\u5bfc\u4e4b\u4e00\u3002\u4e2d\u5b66\u6bd5\u4e1a\u4ee5\u540e\u8003\u5165\u9999\u6e2f\u65e0\u7ebf\u7535\u89c6\u53f0\u827a\u5458\u8bad\u7ec3\u73ed\u7684\u591c\u95f4\u90e8\u3002\u7ed3\u4e1a\u540e\u6210\u4e3a\u65e0\u7ebf\u827a\u4eba\uff0c\u6700\u521d\u66fe\u5728\u300a\u9999\u57ce\u6d6a\u5b50\u300b\u300a\u5c04\u96d5\u82f1\u96c4\u4f20\u300b\u7b49\u5267\u96c6\u4e2d\u62c5\u4efb\u4e34\u65f6\u6f14\u5458\u3002</div>\n    <Divider />\n    <div>\u53e4\u6709\u5173\u4e91\u957f\u5168\u795e\u8d2f\u6ce8\u4e0b\u8c61\u68cb\u522e\u9aa8\u7597\u6bd2\uff0c\u4eca\u6709\u6211\u96f6\u96f6\u6f06\u805a\u7cbe\u4f1a\u795e\u770bA\u7247\u6316\u9aa8\u53d6\u5f39\u5934\u3002</div>\n    <Divider>\u5927\u8bdd\u897f\u6e38</Divider>\n    <div>\u66fe\u7ecf\u6709\u4e00\u4efd\u771f\u8bda\u7684\u7231\u60c5\u653e\u5728\u6211\u9762\u524d\uff0c\u6211\u6ca1\u6709\u73cd\u60dc\uff0c\u7b49\u6211\u5931\u53bb\u7684\u65f6\u5019\u6211\u624d\u540e\u6094\u83ab\u53ca\uff0c\u4eba\u4e16\u95f4\u6700\u75db\u82e6\u7684\u4e8b\u83ab\u8fc7\u4e8e\u6b64\u3002 \u5982\u679c\u4e0a\u5929\u80fd\u591f\u7ed9\u6211\u4e00\u4e2a\u518d\u6765\u4e00\u6b21\u7684\u673a\u4f1a\uff0c\u6211\u4f1a\u5bf9\u90a3\u4e2a\u5973\u5b69\u5b50\u8bf4\u4e09\u4e2a\u5b57\uff1a\u6211\u7231\u4f60\u3002 \u5982\u679c\u975e\u8981\u5728\u8fd9\u4efd\u7231\u4e0a\u52a0\u4e0a\u4e00\u4e2a\u671f\u9650\uff0c\u6211\u5e0c\u671b\u662f\u2026\u2026 \u4e00\u4e07\u5e74</div>\n    <Divider dashed />\n    <div>\u66fe\u7ecf\u75db\u82e6\uff0c\u624d\u77e5\u9053\u771f\u6b63\u7684\u75db\u82e6\uff1b\u66fe\u7ecf\u6267\u8457\uff0c\u624d\u80fd\u653e\u4e0b\u6267\u8457\uff1b\u66fe\u7ecf\u7275\u6302\uff0c\u624d\u80fd\u4e86\u65e0\u7275\u6302\u3002</div>\n  </div>,\n  _mount_\n);\n```\n\n### \u5782\u76f4\u5206\u5272\u7ebf\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Divider } from 'uiw';\n\nReactDOM.render(\n  <div>\n    \u9996\u9875\n    <Divider type=\"vertical\" />\n    <a href=\"#\">\u5217\u8868\u9875\u9762</a>\n    <Divider type=\"vertical\" />\n    <a href=\"#\">\u6587\u7ae0\u8be6\u60c5</a>\n  </div>,\n  _mount_\n);\n```\n\n### \u6807\u9898\u5bf9\u9f50\u4f4d\u7f6e\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Divider } from 'uiw';\n\nReactDOM.render(\n  <div style={{ maxWidth: 530 }}>\n    <Divider dashed />\n    <div>\u5468\u661f\u9a70\uff1a \u9999\u6e2f\u6f14\u5458\u3001\u5bfc\u6f14\u3002\u7956\u7c4d\u6d59\u6c5f\u5b81\u6ce2\uff0c1962\u5e746\u670822\u65e5\u751f\u4e8e\u9999\u6e2f\uff0c\u4ed6\u662f\u9999\u6e2f\u6700\u4e3a\u91cd\u8981\u7684\u559c\u5267\u7247\u6f14\u5458\u4e0e\u7f16\u5bfc\u4e4b\u4e00\u3002\u4e2d\u5b66\u6bd5\u4e1a\u4ee5\u540e\u8003\u5165\u9999\u6e2f\u65e0\u7ebf\u7535\u89c6\u53f0\u827a\u5458\u8bad\u7ec3\u73ed\u7684\u591c\u95f4\u90e8\u3002\u7ed3\u4e1a\u540e\u6210\u4e3a\u65e0\u7ebf\u827a\u4eba\uff0c\u6700\u521d\u66fe\u5728\u300a\u9999\u57ce\u6d6a\u5b50\u300b\u300a\u5c04\u96d5\u82f1\u96c4\u4f20\u300b\u7b49\u5267\u96c6\u4e2d\u62c5\u4efb\u4e34\u65f6\u6f14\u5458\u3002</div>\n    <Divider align=\"left\">\u5927\u8bdd\u897f\u6e38</Divider>\n    <div>\u53e4\u6709\u5173\u4e91\u957f\u5168\u795e\u8d2f\u6ce8\u4e0b\u8c61\u68cb\u522e\u9aa8\u7597\u6bd2\uff0c\u4eca\u6709\u6211\u96f6\u96f6\u6f06\u805a\u7cbe\u4f1a\u795e\u770bA\u7247\u6316\u9aa8\u53d6\u5f39\u5934\u3002</div>\n    <Divider>\u5927\u8bdd\u897f\u6e38</Divider>\n    <div>\u66fe\u7ecf\u6709\u4e00\u4efd\u771f\u8bda\u7684\u7231\u60c5\u653e\u5728\u6211\u9762\u524d\uff0c\u6211\u6ca1\u6709\u73cd\u60dc\uff0c\u7b49\u6211\u5931\u53bb\u7684\u65f6\u5019\u6211\u624d\u540e\u6094\u83ab\u53ca\uff0c\u4eba\u4e16\u95f4\u6700\u75db\u82e6\u7684\u4e8b\u83ab\u8fc7\u4e8e\u6b64\u3002</div>\n    <Divider dashed align=\"right\">\u5927\u8bdd\u897f\u6e38</Divider>\n    <div>\u66fe\u7ecf\u75db\u82e6\uff0c\u624d\u77e5\u9053\u771f\u6b63\u7684\u75db\u82e6\uff1b\u66fe\u7ecf\u6267\u8457\uff0c\u624d\u80fd\u653e\u4e0b\u6267\u8457\uff1b\u66fe\u7ecf\u7275\u6302\uff0c\u624d\u80fd\u4e86\u65e0\u7275\u6302\u3002</div>\n  </div>,\n  _mount_\n);\n```\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| type | \u6c34\u5e73\u8fd8\u662f\u5782\u76f4\u7c7b\u578b | enum{`horizontal`,`vertical`}\t| `horizontal` |\n| dashed | \u662f\u5426\u865a\u7ebf |\tBoolean\t| `false` |\n| align | \u5206\u5272\u7ebf\u6807\u9898\u7684\u5bf9\u9f50\u4f4d\u7f6e | Enum{`left`, `right`, `center`}\t| `center` |\n"}}]);
//# sourceMappingURL=105.b8522ba0.chunk.js.map