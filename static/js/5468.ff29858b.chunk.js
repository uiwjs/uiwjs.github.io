"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5468],{25468:function(n,e,l){l.r(e),e.default="Tree \u6811\u5f62\u63a7\u4ef6\n===\n\n\u4f7f\u7528\u6811\u63a7\u4ef6\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u5c55\u5f00\u6536\u8d77\u9009\u62e9\u7b49\u4ea4\u4e92\u529f\u80fd\u3002\n\n```jsx\nimport { Tree } from 'uiw';\n// or\nimport Tree from '@uiw/react-tree';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1' },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"\u5355\u9009\">\n          <Tree\n            defaultExpandAll={true}\n            data={data}\n            onExpand={(key, expanded, data, node) => {\n              console.log('onExpand',key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log('onSelected',key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u591a\u9009\uff0c\u5b50\u8282\u70b9\u4e0d\u53d7\u63a7\">\n          <Tree\n          autoExpandParent={true}\n            data={data}\n            multiple\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u591a\u9009\uff0c\u5b50\u8282\u70b9\u53d7\u63a7\">\n          <Tree\n            data={data}\n            multiple\n            checkStrictly\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u81ea\u5b9a\u4e49\u56fe\u6807\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Tree, Card, Row, Col, Icon } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1' },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"\u6807\u9898\u4e2d\u6dfb\u52a0\u56fe\u6807\">\n          <Tree\n            data={data}\n            renderTitle={(item, { selected, noChild }) => (\n              <>\n                <Icon style={{ display: '-webkit-inline-box' }} type={noChild ? 'smile-o' : 'apple'} />\n                <span>{item.label}</span>\n              </>\n            )}\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u66ff\u6362\u9ed8\u8ba4\u6298\u53e0\u56fe\u6807\">\n          <Tree\n            data={data}\n            icon=\"right-circle-o\"\n            onExpand={(key, expanded, data, node) => {\n              console.log(key, expanded, data, node);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u81ea\u5b9a\u4e49\u5c55\u5f00\u56fe\u6807\">\n          <Tree\n            data={data}\n            iconAnimation={false}\n            icon={(data, { isOpen, noChild }) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u81ea\u5b9a\u4e49\u9009\u4e2d\u6548\u679c\n\n\u901a\u8fc7\u8bbe\u7f6e `checkStrictly` \u7236\u8282\u70b9\u53d7\u5b50\u8282\u70b9\u63a7\u5236\uff0c\u8bbe\u7f6e `multiple` \u4e3a\u591a\u9009\uff0c\u8bbe\u7f6e `isSelected` \u53d6\u6d88\u9009\u4e2d\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 [`TreeChecked`](#/components/tree-checked) \u7ec4\u4ef6\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1', disabled: true },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  },\n  { label: '\u6fb3\u95e8', key: '3' },\n];\n\nconst Demo = () => (\n  <div>\n    <Tree\n      data={data}\n      selectedKeys={['0-1-1']}\n      multiple\n      isSelected={false}\n      checkStrictly\n      renderTitle={(item, { selected, isHalfChecked }) => {\n        if(isHalfChecked) {\n          return (\n            <><Icon type=\"minus-square-o\" style={{ color: 'green' }} /> <span>{item.label}</span></>\n          );\n        }\n        if (selected) {\n          return (\n            <><Icon type=\"check-square-o\" style={{ color: 'green' }} /> <span>{item.label}</span></>\n          );\n        }\n        return (\n          <><Icon type=\"square-o\" style={{ color: '#b6b6b6' }} /> <span>{item.label}</span></>\n        );\n      }}\n      onExpand={(key, expanded, data, node) => {\n        console.log(key, expanded, data, node);\n      }}\n      onSelected={(key, selected, item, evn) => {\n        console.log(key, selected, item, evn);\n      }}\n    />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n### \u8fde\u63a5\u7ebf\n\n\u5e26\u8fde\u63a5\u7ebf\u7684\u6811\uff0c\u901a\u8fc7\u8bbe\u7f6e `showLine`\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1' },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n      {\n        label: '\u5d07\u6587\u533a',\n        key: '2-3-0',\n        children:[\n          { label: '\u4e1c\u82b1\u5e02\u8857\u9053', key: '2-3-1' },\n          { label: '\u4f53\u80b2\u9986\u8def\u8857\u9053', key: '2-3-2' },\n          { label: '\u524d\u95e8\u8857\u9053', key: '2-3-3' },\n        ]\n      },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"\u81ea\u5b9a\u4e49\u5c55\u5f00\u56fe\u6807\">\n          <Tree\n            data={data}\n            showLine\n            iconAnimation={false}\n            icon={(data, {isOpen, noChild}) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u81ea\u5b9a\u4e49\u5c55\u5f00\u56fe\u6807\">\n          <Tree\n            data={data}\n            showLine\n            icon={(data, {isOpen, noChild}) => {\n              if(noChild) {\n                return 'file-text';\n              }\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u9ed8\u8ba4\u5c55\u5f00\u6811\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Tree, Card, Row, Col } from 'uiw';\n\nconst data = [\n  {\n    label: '\u6e56\u5317\u7701',\n    key: '0-0-0',\n    children:[\n      {\n        label: '\u6b66\u6c49\u5e02',\n        key: '0-1-0',\n        children:[\n          { label: '\u65b0\u6d32\u533a', key: '0-1-1' },\n          { label: '\u6b66\u660c\u533a', key: '0-1-2' },\n          {\n            label: '\u6c49\u5357\u533a',\n            key: '0-1-3',\n            children:[\n              { label: '\u6c49\u5357\u533a1', key: '0-1-3-1' },\n              { label: '\u6c49\u5357\u533a2', key: '0-1-3-2' },\n              { label: '\u6c49\u5357\u533a3', key: '0-1-3-3' },\n            ]\n          },\n        ]\n      },\n      { label: '\u9ec4\u5188\u5e02', key: '0-2-0' },\n      {\n        label: '\u9ec4\u77f3\u5e02',\n        key: '0-3-0',\n        children:[\n          { label: '\u9752\u5c71\u533a', key: '0-3-1' },\n          { label: '\u9ec4\u9642\u533a', key: '0-3-2' },\n          { label: '\u9752\u5c71\u533a', key: '0-3-3' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u4e0a\u6d77\u5e02',\n    key: '1-0-0',\n    children:[\n      { label: '\u9ec4\u6d66\u533a', key: '1-0-1' },\n      { label: '\u5362\u6e7e\u533a', key: '1-0-2' },\n      {\n        label: '\u5f90\u6c47\u533a',\n        key: '1-0-3',\n        children:[\n          { label: '\u534a\u6dde\u56ed\u8def\u8857\u9053', key: '1-1-0' },\n          { label: '\u5357\u4eac\u4e1c\u8def\u8857\u9053', key: '1-2-0' },\n          { label: '\u5916\u6ee9\u8857\u9053', key: '1-3-0' },\n        ]\n      },\n    ]\n  },\n  {\n    label: '\u5317\u4eac\u5e02',\n    key: '2-0-0',\n    children:[\n      { label: '\u4e1c\u57ce\u533a', key: '2-1-0' },\n      { label: '\u897f\u57ce\u533a', key: '2-2-0' },\n    ]\n  }\n];\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Card title=\"\u9ed8\u8ba4\u5c55\u5f00\u90e8\u5206\">\n          <Tree\n            data={data}\n            showLine\n            openKeys={['0-0-0', '0-1-0']}\n            iconAnimation={false}\n            icon={(data, {isOpen, noChild}) => {\n              if(isOpen && !noChild) {\n                return 'folder-open';\n              } else if (!noChild) {\n                return 'folder';\n              }\n              return 'file-text';\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n      <Col fixed>\n        <Card title=\"\u5c55\u5f00\u6240\u6709\">\n          <Tree\n            data={data}\n            showLine\n            defaultExpandAll\n            icon={(data, {isOpen, noChild}) => {\n              if(noChild) {\n                return 'file-text';\n              }\n            }}\n            onExpand={(key, expanded, data) => {\n              console.log(key, expanded, data);\n            }}\n            onSelected={(key, selected, item, evn) => {\n              console.log(key, selected, item, evn);\n            }}\n          />\n        </Card>\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| data | \u5c55\u793a\u6570\u636e | Array | `TreeData[]` |\n| openKeys | \u8282\u70b9\u5c55\u5f00 `key` | Array | `[]` |\n| selectedKeys | \u8bbe\u7f6e\u9009\u4e2d\u7684\u6811\u8282\u70b9 | Array | `[]` |\n| autoExpandParent | \u662f\u5426\u81ea\u52a8\u5c55\u5f00\u7236\u8282\u70b9 | Boolean | `true` |\n| defaultExpandAll | \u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u6811\u8282\u70b9 | Boolean | `false` |\n| iconAnimation | \u5c55\u5f00\u6536\u7f29\u56fe\u6807\uff0c\u53c2\u6570\u8bbe\u4e3a `false` \u7981\u7528\u52a8\u753b | Boolean | `true` |\n| isSelected | \u662f\u5426\u9009\u4e2d\u5f53\u524d\u8282\u70b9\u6837\u5f0f\u3002 | Boolean | `true` |\n| showLine | \u662f\u5426\u5c55\u793a\u8fde\u63a5\u7ebf | Boolean | `false` |\n| checkStrictly | \u5b50\u8282\u70b9\u53d7\u7236\u8282\u70b9\u63a7\u5236\u8bbe\u7f6e `true`\uff0c\u9700\u8981\u914d\u5408 `multiple` \u53c2\u6570\u4f7f\u7528\u3002 | Boolean | `false` |\n| multiple | \u652f\u6301\u70b9\u9009\u591a\u4e2a\u8282\u70b9 | Boolean | `false` |\n| icon | \u91cd\u65b0\u5b9a\u4e49\uff0c\u5c55\u5f00\u6536\u7f29\u56fe\u6807\uff0c\u5f53\u4e3a\u51fd\u6570\u65f6\u89c6\u4e3a\u81ea\u5b9a\u4e49\u56fe\u6807\uff0c\u5e76\u5c55\u793a\u975e\u6298\u53e0\u9879\u7684\u56fe\u6807\u3002 | ~~Function(data: object, noChild: bool)/String/Node~~ `@3.4.0+` Function(data: object, { selected: bool, noChild: bool })/String/Node| - |\n| renderTitle | \u91cd\u65b0\u5b9a\u4e49\u6bcf\u4e2a\u6807\u9898\u8282\u70b9\u7684\u663e\u793a | ~~Function(item, selected: bool, noChild: bool)~~ `@3.4.0+` Function(item: TreeData, node?: { selected?: boolean, noChild?: boolean, isHalfChecked?: boolean, openKeys?: TreeProps['openKeys'], selectedKeys?: TreeProps['selectedKeys'] }) => React.ReactElement; | - |\n| onSelected | \u70b9\u51fb\u9009\u62e9\u6811\u8282\u70b9\u89e6\u53d1 | Function(selectedKeys: array, key, selected: bool, data, e) | - |\n| onExpand | \u5c55\u5f00/\u6536\u8d77\u8282\u70b9\u65f6\u89e6\u53d1 | Function(key, expanded: bool, data, evn) | - |\n\n### data\n\n```json\n[\n  {\n    \"label\": \"\u6e56\u5317\u7701\",\n    \"key\": \"0-0-0\",\n    \"disabled\": false,\n    \"children\":[]\n  }\n  ...\n]\n```\n"}}]);
//# sourceMappingURL=5468.ff29858b.chunk.js.map