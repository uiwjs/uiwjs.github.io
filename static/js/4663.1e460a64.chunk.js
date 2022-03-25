"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4663],{34663:function(n,e,l){l.r(e),e.default="Cascader \u7ea7\u8054\u9009\u62e9\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-cascader/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-cascader.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-cascader)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-cascader.svg?label=@uiw/react-cascader)](https://npmjs.com/@uiw/react-cascader)\n\n\u7ea7\u8054\u9009\u62e9\u6846\u3002v4.16.0\u4e2d\u6dfb\u52a0\n\n```jsx\nimport { Cascader  } from 'uiw';\n// or\nimport Cascader from '@uiw/react-cascader';\n```\n\n## \u57fa\u7840\u793a\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Cascader } from 'uiw';\n\nconst Demo = () => {\n\n  const options = [\n    {\n      label: '\u4e0a\u6d77\u5e02',\n      value: 1,\n      children: [\n        {\n          label: '\u5f90\u6c47\u533a',\n          value: 4,\n          children: [\n            { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', value: 6 },\n            { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', value: 7 },\n            { label: '\u5916\u6ee9\u8857\u9053', value: 8 },\n          ]\n        },\n      ]\n    },\n    {\n      label: '\u5317\u4eac\u5e02',\n      value: 9,\n      children: [\n        {\n          label: '\u5d07\u6587\u533a',\n          value: 12,\n          children: [\n            { label: '\u4e1c\u82b1\u5e02\u8857\u9053', value: 13 },\n            { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', value: 14 },\n            { label: '\u524d\u95e8\u8857\u9053', value: 15 },\n          ]\n        },\n      ]\n    },\n  ];\n\n  return (\n    <div style={{ width: 200 }}>\n    < Cascader\n        allowClear={true}\n        placeholder=\"\u8bf7\u9009\u62e9\"\n        value={[1, 4, 7]}\n        option={options}\n        onChange={(value, seleteds) => console.log(value, seleteds)}\n      />\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u641c\u7d22\u9009\u9879\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Cascader } from 'uiw';\n\nconst Demo = () => {\n\n  const options = [\n    {\n      label: '\u4e0a\u6d77\u5e02',\n      value: 1,\n      children: [\n        {\n          label: '\u5f90\u6c47\u533a',\n          value: 4,\n          children: [\n            { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', value: 6 },\n            { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', value: 7 },\n            { label: '\u5916\u6ee9\u8857\u9053', value: 8 },\n          ]\n        },\n      ]\n    },\n    {\n      label: '\u5317\u4eac\u5e02',\n      value: 9,\n      children: [\n        {\n          label: '\u5d07\u6587\u533a',\n          value: 12,\n          children: [\n            { label: '\u4e1c\u82b1\u5e02\u8857\u9053', value: 13 },\n            { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', value: 14 },\n            { label: '\u524d\u95e8\u8857\u9053', value: 15 },\n          ]\n        },\n      ]\n    },\n  ];\n\n  return (\n    <div style={{ width: 200 }}>\n      <Cascader\n        allowClear={true}\n        placeholder=\"\u8bf7\u9009\u62e9\"\n        value={[1, 4, 7]}\n        option={options}\n        onChange={(value, seleteds) => console.log(value, seleteds)}\n        onSearch={(text)=> console.log('text', text)}\n      />\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5728\u8868\u5355\u4e2d\u4f7f\u7528\n\n\u5728 [`<Form />`](#/components/form) \u8868\u5355\u4e2d\u5e94\u7528 `<Cascader />` \u7ec4\u4ef6\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Form, Row, Col, Cascader, Button } from 'uiw';\n\nconst Demo = () => {\nconst options = [\n    {\n      label: '\u4e0a\u6d77\u5e02',\n      value: 1,\n      children: [\n        {\n          label: '\u5f90\u6c47\u533a',\n          value: 4,\n          children: [\n            { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', value: 6 },\n            { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', value: 7 },\n            { label: '\u5916\u6ee9\u8857\u9053', value: 8 },\n          ]\n        },\n      ]\n    },\n    {\n      label: '\u5317\u4eac\u5e02',\n      value: 9,\n      children: [\n        {\n          label: '\u5d07\u6587\u533a',\n          value: 12,\n          children: [\n            { label: '\u4e1c\u82b1\u5e02\u8857\u9053', value: 13 },\n            { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', value: 14 },\n            { label: '\u524d\u95e8\u8857\u9053', value: 15 },\n          ]\n        },\n      ]\n    },\n  ];\n\n  return (\n    <div>\n      <Form\n        onSubmitError={(error) => {\n          if (error.filed) {\n            return { ...error.filed };\n          }\n          return null;\n        }}\n        onSubmit={({initial, current}) => {\n          const errorObj = {};\n          if (!current.selectField) {\n            errorObj.selectField = '\u9ed8\u8ba4\u9700\u8981\u9009\u62e9\u5185\u5bb9\uff0c\u9009\u62e9\u5165\u5185\u5bb9';\n          }\n          if(Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n            throw err;\n          }\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u9009\u62e9\u503c\u4e3a\uff1a${current.selectField}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }}\n        fields={{\n          cascader: {\n            initialValue:[1, 4, 7],\n            children: (\n              <Cascader\n                allowClear={true}\n                onSearch={true}\n                placeholder=\"\u8bf7\u9009\u62e9\"\n                option={options}\n                onChange={(value, seleteds) => console.log(value, seleteds)}\n              />\n            )\n          },\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row >\n                <Col fixed style={{width:200}}>{fields.cascader}</Col>\n              </Row>\n              <Row>\n                <Col fixed>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                </Col>\n              </Row>\n              <Row>\n                <Col>\n                  <pre style={{ padding: 10, marginTop: 10 }}>\n                    {JSON.stringify(state.current, null, 2)}\n                  </pre>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u7248\u672c |\n| ---- | ---- | ---- | ---- | ---- |\n| allowClear | \u652f\u6301\u6e05\u9664 | Boolean | `false` | - |\n| placeholder | \u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57 | String | - | - |\n| option | \u9009\u9879\u83dc\u5355 | { value: String \\| Number, label: React.ReactNode, children: Array<String \\| Number>} | - | - |\n| value | \u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee\uff0c\u591a\u9009\u65f6\u4e3a\u4e00\u4e2a\u6570\u7ec4 | String[] \\| Number[] | - | - |\n| onChange | \u9009\u4e2d\u9009\u9879\u8c03\u7528\u6b64\u51fd\u6570 | function( isSeleted, value, selectedOptions) | - | - |\n| onSearch | \u5f00\u542f\u641c\u7d22\u9009\u9879 | functionon(searchText) \\| Boolean | - | v4.16.1 |\n"}}]);
//# sourceMappingURL=4663.1e460a64.chunk.js.map