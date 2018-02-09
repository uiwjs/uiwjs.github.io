webpackJsonp([85],{798:function(n,t){n.exports='CopyToClipboard \u590d\u5236\n===\n\n\u5c06\u6587\u672c\u5230\u526a\u5207\u677f\uff0c\u590d\u5236\u5230\u526a\u8d34\u677f\u529f\u80fd\u53ef\u4ee5\u5e94\u7528\u4e8e\u5404\u79cd\u5143\u7d20\u3002\n\n## \u57fa\u7840\u5b9e\u4f8b\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <CopyToClipboard text="\u6211\u88ab\u4e00\u4e2a\u8fde\u63a5\u590d\u5236\u4e86\uff01" tooltip="\u590d\u5236\u6210\u529f\uff01"> \u70b9\u51fb\u6211\u590d\u5236 </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## \u70b9\u51fb\u6309\u94ae\u590d\u5236\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: "\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6"\n    }\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div>\u70b9\u51fb\u590d\u5236\uff1a{copyText}</div>\n        <CopyToClipboard style={{marginTop:10,display:\'inline-block\'}} text={copyText} tooltip="\u590d\u5236\u6210\u529f\uff01">\n          <Button size="small">\u70b9\u51fb\u590d\u5236</Button>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## \u590d\u5236\u8f93\u5165\u6846\u5185\u5bb9\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: "\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6"\n    }\n  }\n  onChange(e){\n    this.setState({\n      copyText:e.target.value\n    })\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div><Input ref="input" type="text" value={copyText} onChange={this.onChange.bind(this)}/></div>\n        <CopyToClipboard \n          style={{marginTop:10,display:\'inline-block\'}} \n          text={copyText} \n          tooltip="\u590d\u5236\u6210\u529f\uff01"\n          onClick={()=>{\n            const {input} = this.refs;\n            ReactDOM.findDOMNode(input).querySelector(\'input\').select();\n          }}\n        >\n          <Button size="small">\u70b9\u51fb\u590d\u5236</Button>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## \u5b89\u88c5\u548c\u4f7f\u7528\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { CopyToClipboard } from \'uiw\';\n// or\nimport CopyToClipboard from \'uiw/lib/copy-to-clipboard\';\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| text | \u62f7\u8d1d\u7684\u6587\u672c | String | - |\n| tooltip | \u62f7\u8d1d\u6210\u7684\u63d0\u793a | String\u3001ReactNode | - |\n| leaveDelay | `tooltip`\u6d88\u5931\u7684\u65f6\u95f4 | Number | `1000` |\n| onClick | \u70b9\u51fb\u4e8b\u4ef6 | Function(text,isCopy,event) | - |\n'}});