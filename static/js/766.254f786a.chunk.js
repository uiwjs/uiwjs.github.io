"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[766],{80766:function(e,n,l){l.r(n),n.default="SearchTree \u5e26\u641c\u7d22\u7684Tree\u9009\u62e9\u63a7\u4ef6\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-tree/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-tree.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-tree)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-search-tree.svg?label=@uiw/react-search-tree)](https://npmjs.com/@uiw/react-search-tree)\n\n\u4f7f\u7528\u6811\u9009\u62e9\u63a7\u4ef6\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u9009\u4e2d\u72b6\u6001\u3002\u65b0\u7ec4\u4ef6 v4.11.7+ \u652f\u6301\u3002\n\n```jsx\nimport { SearchTree } from 'uiw';\n// or\nimport SearchTree from '@uiw/react-search-tree';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React, { useState, useEffect, useRef } from 'react';\nimport ReactDOM from 'react-dom';\nimport {  SearchTree } from 'uiw';\n\nconst data = [\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: 1,\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: 2 },\n      { label: '\u5362\u6e7e\u533a', key: 3 },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: 4,\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: 6 },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: 7 },\n          { label: '\u5916\u6ee9\u8857\u9053', key: 8 },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: 9,\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: 10 },\n      { label: '\u897f\u57ce\u533a', key: 11 },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: 12,\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: 13 },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: 14 },\n          { label: '\u524d\u95e8\u8857\u9053', key: 15 },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: 16 },\n];\n\nconst datas =[\n  { label: '\u4e0a\u6d77\u5e02',  key: 0 },\n  {\n    label: '\u5317\u4eac\u5e02',  key: 1,\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: 10 },\n   ]\n  },\n  { label: '\u6210\u90fd\u5e02',  key: 2 },\n]\n\nconst Demo = () => {\n\nconst [value,valueSet]=useState([{ label: '\u9ec4\u6d66\u533a', key: 12 }])\nconst [values,valuesSet]=useState([{ label: '\u5317\u4eac\u5e02', key: 1 }])\nconst [valueSinge,valueSingeSet]=useState([{ label: '\u4e0a\u6d77\u5e02', key: '1-0-0' }])\n\nconst onChange=(selectd, selectedAll,  isChecked)=>{\n  console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)\n  valueSet(selectedAll)\n}\n\nconst onChanges=(selectd, selectedAll,  isChecked)=>{\n  console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)\n  valuesSet(selectedAll)\n}\n\nconst onChangeSinge=(selectd, selectedAll,  isChecked)=>{\n  console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)\n  valueSingeSet(selectedAll)\n}\n\n return (\n   <>\n    <Row>\n      <Col >\n        <label>\u591a\u9009</label>\n        <SearchTree\n          style={{ width:300 }}\n          allowClear={true}\n          onSearch={(searchValue)=>console.log('multiple',searchValue)}\n          onChange={onChange}\n          value={value}\n          options={data}\n          placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n        />\n      </Col>\n    </Row>\n    <label>\u5355\u9009</label>\n    <Row>\n        <SearchTree\n          style={{width:300}}\n          loading={true}\n          multiple={false}\n          allowClear={true}\n          onSearch={(searchValue)=>console.log('singe',searchValue)}\n          onChange={onChanges}\n          value={values}\n          options={datas}\n          placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n        />\n        <Col style={{marginLeft:20}}>\n        <SearchTree\n          style={{width:300}}\n          multiple={false}\n          allowClear={true}\n          onSearch={(searchValue)=>console.log('singe',searchValue)}\n          onChange={onChangeSinge}\n          value={valueSinge}\n          options={data}\n          placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n        />\n        </Col>\n    </Row>\n  </>\n  )\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7981\u7528\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React, { useState, useEffect, useRef } from 'react';\nimport ReactDOM from 'react-dom';\nimport {  SearchTree } from 'uiw';\n\nconst data = [\n  { label: '\u4e0a\u6d77\u5e02',  key: 0 },\n  {\n    label: '\u5317\u4eac\u5e02',  key: 1,\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: 10 },\n   ]\n  },\n  { label: '\u6210\u90fd\u5e02',  key: 2 },\n]\n\nconst Demo = () => {\n\n  return(\n    <SearchTree\n      disabled={true}\n      style={{ width:300 }}\n      allowClear={true}\n      value={[{ label: '\u4e1c\u57ce\u533a', key: 10 },{ label: '\u6210\u90fd\u5e02',  key: 2 }]}\n      options={data}\n      placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n    />\n  )\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u81ea\u5b9a\u4e49\u7a7a\u9009\u9879\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React, { useState, useEffect, useRef } from 'react';\nimport {  SearchTree } from 'uiw';\n\nconst Demo = () => {\n  return(\n    <>\n      <SearchTree\n        style={{ width:200 }}\n        placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n      />\n      <SearchTree\n        style={{ width:200,marginTop:5 }}\n        emptyOption={<span>\u6682\u65e0\u6570\u636e..</span>}\n        placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n      />\n    </>\n  )\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Form\u4e2d\u4f7f\u7528\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React, { useState, useEffect, useRef } from 'react';\nimport ReactDOM from 'react-dom';\nimport {  Form, Button, SearchTree, Card, Row, Col } from 'uiw';;\n\n\nconst Demo = () => {\nconst form=useRef()\n\n  const data = [\n    {\n      label: '\u4e0a\u6d77\u5e02',\n      key: '1-0-0',\n      children:[\n        { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n        { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n        {\n          label: '\u5f90\u6c47\u533a',\n          key: '1-0-3',\n          children:[\n            { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n            { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n            { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n          ]\n        },\n      ]\n    },\n    {\n      label: '\u5317\u4eac\u5e02',\n      key: '2-0-0',\n      children:[\n        { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n        { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n        {\n          label: '\u5d07\u6587\u533a',\n          key: '2-3-0',\n          children:[\n            { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n            { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n            { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n          ]\n        },\n      ]\n    },\n    { label: '\u6fb3\u95e8', key: '3' },\n  ];\n\n  const setValue=()=>{\n    form.current.setFields({\n      searchTree: [{ label: '\u4e1c\u57ce\u533a', key: '2-1-0' }, { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' }],\n      searchTreeSinge:[{ label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' }]\n       })\n  }\n\n  const resetValue=()=>{\n    form.current.resetForm()\n  }\n\n  return (\n    <div>\n      <Form\n        ref={form}\n        onSubmitError={(error) => {\n          if (error.filed) {\n            return { ...error.filed };\n          }\n          return null;\n        }}\n        onSubmit={({initial, current}) => {\n          const errorObj = {};\n          if (!current.searchTree) {\n            errorObj.searchTree = '\u9ed8\u8ba4\u9700\u8981\u9009\u62e9\u5185\u5bb9\uff0c\u9009\u62e9\u5165\u5185\u5bb9';\n          }\n          if(Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n            throw err;\n          }\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u9009\u62e9\u503c\u4e3a\uff1a${current.selectField}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }}\n        fields={{\n          searchTree: {\n            initialValue:[ { label: '\u9ec4\u6d66\u533a', key: '1-0-1' }, { label: '\u5362\u6e7e\u533a', key: '1-0-2' }],\n            children: (\n                <SearchTree\n                  allowClear={true}\n                  onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}\n                  onChange={(selectd, selectedAll,  isChecked)=>console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)}\n                  options={data}\n                  placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n                />\n            )\n          },\n          searchTreeSinge: {\n            initialValue:[{ label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' }],\n            children: (\n                <SearchTree\n                  multiple={false}\n                  allowClear={true}\n                  onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}\n                  onChange={(selectd, selectedAll,  isChecked)=>console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)}\n                  options={data}\n                  placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n                />\n            )\n          },\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row style={{display:'flex',flexDirection:'column'}}>\n                <div>\u591a\u9009</div>\n                <Col >{fields.searchTree}</Col>\n              </Row>\n              <Row style={{display:'flex',flexDirection:'column'}}>\n                <label>\u5355\u9009</label>\n                <Col >{fields.searchTreeSinge}</Col>\n              </Row>\n              <Row>\n                <Col fixed>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                  <Button onClick={setValue} type=\"primary\" >setValue</Button>\n                  <Button onClick={resetValue} type=\"primary\" >\u91cd\u7f6e</Button>\n                </Col>\n              </Row>\n              <Row>\n                <Col>\n                  <pre style={{ padding: 10, marginTop: 10 }}>\n                    {JSON.stringify(state.current, null, 2)}\n                  </pre>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| allowClear | \u652f\u6301\u6e05\u9664 | Boolean | `false` |\n| disabled | \u7981\u7528\u9009\u62e9\u5668 | Boolean | `false` |\n| multiple | \u662f\u5426\u53ef\u4ee5\u591a\u9009 | Boolean | `true` |\n| value | \u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee | [{label:string, key:string}] | - |\n| options | \u4e0b\u62c9\u6570\u636e\u6e90,\u53ef\u53c2\u8003Tree\u4e0b\u62c9\u6570\u636e\u6e90 | [{label:string, key:string, children: [{label:string, key:string}] }] | - |\n| placeholder | \u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57 | String | - |\n| size | \u9009\u62e9\u6846\u5c3a\u5bf8 | Enum{large, default, small } | `default` |\n| onChange | \u9009\u4e2d option\uff0c\u6216 input \u7684 value\uff0c\u8c03\u7528\u6b64\u51fd\u6570 | function(selectd, selectdAll, isChecked)=>void | - |\n| onSearch | \u6587\u672c\u6846\u503c\u53d8\u5316\u65f6\u56de\u8c03 | function(searchValue) | - |\n| loading | \u52a0\u8f7d\u4e2d\u72b6\u6001 | Boolean | `false` |\n| emptyOption | \u81ea\u5b9a\u4e49\u4e0b\u62c9\u9009\u9879\u4e3a\u7a7a\u65f6\u663e\u793a\u5185\u5bb9 | React.ReactNode | [Empty](https://uiwjs.github.io/#/components/empty) |\n\n"}}]);
//# sourceMappingURL=766.254f786a.chunk.js.map