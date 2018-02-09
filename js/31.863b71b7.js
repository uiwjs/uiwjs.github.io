webpackJsonp([31],{852:function(n,e){n.exports='Form \u8868\u5355\n===\n\n\u7531\u8f93\u5165\u6846\u3001\u9009\u62e9\u5668\u3001\u5355\u9009\u6846\u3001\u591a\u9009\u6846\u7b49\u63a7\u4ef6\u7ec4\u6210\uff0c\u7528\u4ee5\u6536\u96c6\u3001\u6821\u9a8c\u3001\u63d0\u4ea4\u6570\u636e\n\n\n### \u8868\u5355\u96c6\u5408\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    form: {\n      name: "wui",\n      password: "",\n      email: "wwww@qq.com",\n      select: "\u9009\u98794",\n      timeSelect: new Date(2017, 6, 28, 15, 51),\n      online: true,\n      carte: [\'\u6e56\u5317\u83dc\'],\n      category_radio: ["\u4fdd\u5bc6"],\n      category: ["\u9999\u8549","\u6a58\u5b50"],\n      radio:1,\n      radioGroup:"", // \u5982\u679c\u662f\u6570\u5b57\u7c7b\u578b\uff0c\u5fc5\u987b\u8bbe\u7f6e\u7ec4\u4ef6 value={6} \u4e5f\u662f\u6570\u5b57\u578b\n      radioGroupDisabled:"\u4e54\u5e03\u65af",\n      inputNumber:0,\n    },\n    selectOptions: [\n      { value: \'\u9009\u98791\', label: \'\u7ea2\u8461\u8404\u9152\' }, \n      { value: \'\u9009\u98792\', label: \'\u7ecd\u5174\u9ec4\u9152\', disabled: true}, \n      { value: \'\u9009\u98793\', label: \'\u71d5\u4eac\u5564\u9152\' }, \n      { value: \'\u9009\u98794\', label: \'\u695a\u4e61\u738b\u767d\u9152\' }, \n      { value: \'\u9009\u98795\', label: \'\u4e94\u7cae\u6db2\' },\n    ],\n    tagRadioOptions:[\n      {color:"purple", value:\'\u4fdd\u5bc6\'},\n      {color:"orange", value:\'\u7537\u751f\'},\n      {color:"green", value:\'\u5973\u751f\'}\n    ],\n    tagOptions:[\n      {color:"purple", value:\'\u82f9\u679c\'},\n      {color:"orange", value:\'\u6a58\u5b50\'},\n      {color:"green", value:\'\u9999\u8549\'}\n    ],\n    radioOptionsDisabled:[\n      {label: \'\u4e54\u5e03\u65af\', value: \'\u4e54\u5e03\u65af\' },\n      {label: \'\u6bd4\u5c14\u76d6\u8328\', value: \'\u6bd4\u5c14\u76d6\u8328\' },\n      {label: \'\u4e54\u7eb3\u68ee\', value: \'\u4e54\u7eb3\u68ee\' ,disabled: true },\n    ],\n    checkboxOption:[\'\u56db\u5ddd\u83dc\', \'\u6e56\u5317\u83dc\', \'\u6e58\u83dc\', \'\u7ca4\u83dc\'],\n    rules:{\n      name:[\n        { required: true, message: \'\u8bf7\u8f93\u5165\u6d3b\u52a8\u540d\u79f0\'},\n        { min: 4, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'}\n      ],\n      timeSelect:[\n        { required: true, message: \'\u8bf7\u9009\u62e9\u65f6\u95f4\uff01\'},\n      ],\n      password:[\n        { required: true, message: \'\u4e0d\u80fd\u4e3a\u7a7a\uff01\'},\n        { min: 6, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'},\n        { max: 14, message: \'\u957f\u5ea6\u8d85\u51fa\uff01\'}\n      ],\n      email:[\n        {type: \'email\', message: \'\u8f93\u5165\u7684\u4e0d\u662fE-mail!\'}\n      ],\n      category:[\n        {required: true, message: \'\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u9009\u9879\uff01\'}\n      ],\n      carte:[\n        {required: true, message: \'\u4e0d\u80fd\u4e3a\u7a7a\uff01\'},\n        {\n          // \u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219 callback() \u5fc5\u987b\u8c03\u7528\n          validator:(rule, value,callback)=>{\n            if(value.length > 1){\n              callback();\n            }else{\n              callback(new Error("\u81f3\u5c11\u9009\u4e24\u4e2a\u9009\u9879"));\n            }\n          }\n        }\n      ]\n    },\n  };\n}\n\nonChange(key,e, value) {\n  const {form} = this.state;\n  console.log("value:==:",key,value,e)\n  form[key] = value;\n  this.setState({form});\n}\n\nhandleSubmit(e) {\n  e.preventDefault();\n  this.form.validate((valid,dataValues) => {\n    console.log("\u8fd4\u56de\u5185\u5bb9:",dataValues,valid)\n    if (valid) {\n      alert(\'submit!\');\n    } else {\n      console.log(\'error submit!!\');\n      return false;\n    }\n  });\n}\n\nhandleReset(e) {\n  e.preventDefault();\n  // console.log("--reset22:",this.state.form)\n  this.form.resetFields((model)=>{\n    this.setState({form:model})\n  });\n}\n\nrender() {\n  const {form,rules} = this.state;\n  const FormItem = Form.Item;\n  const TagGroup = Tag.Group;\n  const formItemLayout = {\n    labelCol: {\n      xs: { span: 24 },\n      sm: { span: 4 },\n      className:"colspanlab"\n    },\n    wrapperCol: {\n      xs: { span: 24 },\n      sm: { span: 14 },\n      className:"colspan"\n    },\n  };\n  const wrapperCol = {\n    wrapperCol: {\n      xs: {span: 24, offset: 0, },\n      sm: {span: 14, offset: 4, },\n    },\n  }\n  return (\n    <Form style={{width:500}} ref={(component)=>{this.form=component}} model={form} rules={rules}>\n      <FormItem label={<span>\u7528\u6237\u540d</span>} field="name" {...formItemLayout} >\n        <Input \n          value={form.name} \n          placeholder="\u8bf7\u8f93\u5165\u7528\u6237\u540d"\n          onChange={this.onChange.bind(this, \'name\')} />\n      </FormItem>\n      <FormItem label="\u5bc6\u7801" field="password" help="\u8fd9\u91cc\u663e\u793a\u5bf9\u5bc6\u7801\u7684\u5e2e\u52a9\uff0c\u6bd4\u5982\u53ea\u80fd\u82f1\u6587\u5b57\u6bcd"  {...formItemLayout} >\n        <Input \n          // \u6ce8\u610f\u5b57\u6bb5 password\n          value={form.password} \n          type="password"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          icon="lock"\n          onChange={this.onChange.bind(this, \'password\')} />\n      </FormItem>\n      <FormItem label="\u8f93\u5165\u6570\u5b57" field="inputNumber" help="\u8f93\u5165\u6570\u5b575~100"  {...formItemLayout} >\n        <InputNumber value={form.inputNumber} onChange={this.onChange.bind(this,\'inputNumber\')} min="5" max="100"></InputNumber>\n      </FormItem>\n      <FormItem label="\u9009\u62e9\u5668" field="select" help="\u8f93\u5165\u6570\u5b575~100"  {...formItemLayout} >\n        <Select onChange={this.onChange.bind(this,\'select\')} value={form.select}>\n          {\n            this.state.selectOptions.map(elm => {\n              return <Select.Option key={elm.value} label={elm.label} value={elm.value} disabled={elm.disabled} />\n            })\n          }\n        </Select>\n      </FormItem>\n      <FormItem label="\u65f6\u95f4\u9009\u62e9" field="timeSelect"  {...formItemLayout} >\n        <TimeSelect\n          start="08:30"\n          step="00:15"\n          end="18:30"\n          //maxTime="12:30"\n          //readOnly="2323"\n          minTime="9:30"\n          onChange={this.onChange.bind(this, \'timeSelect\')}\n          value={form.timeSelect}\n          placeholder="\u9009\u62e9\u65f6\u95f4"\n          />\n      </FormItem>\n      <FormItem label="\u662f\u5426\u5728\u7ebf" field="online" {...formItemLayout} >\n        <Switch checked={form.online} \n         onChange={this.onChange.bind(this, \'online\')}/>\n      </FormItem>\n      <FormItem label="\u90ae\u7bb1" field="email" {...formItemLayout} >\n        <Input \n          value={form.email}\n          placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1"\n          onChange={this.onChange.bind(this, \'email\')} />\n      </FormItem>\n      <FormItem label="\u5206\u7c7b\u5355\u9009" field="category_radio" {...formItemLayout} >\n        <TagGroup \n          options={this.state.tagRadioOptions}\n          checked={true}\n          isRadio={true}\n          checkedValues={form.category_radio} \n          onChange={this.onChange.bind(this, \'category_radio\')}\n        />\n      </FormItem>\n      <FormItem label="\u5206\u7c7b\u591a\u9009" field="category" {...formItemLayout} >\n        <TagGroup \n          options={this.state.tagOptions}\n          checked={true}\n          checkedValues={form.category} \n          onChange={this.onChange.bind(this, \'category\')}\n        />\n      </FormItem>\n      <FormItem label="\u591a\u9009" field="carte" {...formItemLayout} >\n        <Checkbox.Group \n          options={this.state.checkboxOption}\n          checkedValues={form.carte} \n          onChange={this.onChange.bind(this, \'carte\')} \n        />\n      </FormItem>\n      <FormItem label="\u5355\u9009" field="radio" {...formItemLayout} >\n        <div style={{margin:"7px 0"}}>\n          <Radio value={1} checked={form.radio === 1} \n            onChange={this.onChange.bind(this,"radio")}>\u5907\u9009\u9879</Radio>\n          <Radio value={2} checked={form.radio === 2} \n            onChange={this.onChange.bind(this,"radio")}>\u5907\u9009\u9879</Radio>\n        </div>\n      </FormItem>\n      <FormItem label="\u5355\u9009\u7ec4" field="radioGroup" {...formItemLayout} >\n        <div style={{margin:"7px 0"}}>\n          <Radio.Group value={form.radioGroup} onChange={this.onChange.bind(this,\'radioGroup\')}>\n            <Radio value="3">\u9ad8\u6653\u677e</Radio>\n            <Radio value="6">\u5468\u6770\u4f26</Radio>\n            <Radio value="9">\u9ec4\u5bb6\u9a79</Radio>\n          </Radio.Group>\n        </div>\n      </FormItem>\n      <FormItem label="\u5355\u9009\u7ec4\u914d\u7f6e" field="radioGroupDisabled" {...formItemLayout} >\n        <div style={{margin:"7px 0"}}>\n          <Radio.Group \n            options={this.state.radioOptionsDisabled} \n            value={form.radioGroupDisabled} \n            onChange={this.onChange.bind(this,\'radioGroupDisabled\')} />\n        </div>\n      </FormItem>\n      <FormItem {...wrapperCol}>\n        <Button size="small" type="primary" onClick={this.handleSubmit.bind(this)}>\u63d0\u4ea4</Button>\n        <Button size="small" onClick={this.handleReset.bind(this)}>\u91cd\u7f6e</Button>\n        <Button size="small" onClick={()=>{\n          console.log(this.state.form)\n          }}>\u67e5\u770bState</Button>\n      </FormItem>\n    </Form>\n  )\n}\n```\n\x3c!--End--\x3e\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    form: {\n      name:\'wui\',\n      password: \'\',\n      email: \'\',\n    },\n    rules:{\n      name:[\n        { required: true, message: \'\u8bf7\u8f93\u5165\u6d3b\u52a8\u540d\u79f0\'},\n        { min: 5, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'}\n      ],\n      password:[\n        { required: true, message: \'\u4e0d\u80fd\u4e3a\u7a7a\uff01\'},\n        { min: 6, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'},\n        { max: 14, message: \'\u957f\u5ea6\u8d85\u51fa\uff01\'}\n      ],\n      email:[\n        {type: \'email\', message: \'\u8f93\u5165\u7684\u4e0d\u662fE-mail!\'}\n      ]\n    }\n  }\n}\n\nonChange(key,e, value) {\n  const {form} = this.state;\n  form[key] = value;\n  this.setState({form});\n}\n\nhandleSubmit(e) {\n  e.preventDefault();\n  this.form.validate((valid,dataValues) => {\n    console.log("\u8fd4\u56de\u5185\u5bb9:",dataValues,valid)\n    if (valid) {\n      alert(\'submit!\');\n    } else {\n      console.log(\'error submit!!\');\n      return false;\n    }\n  });\n}\n\nhandleReset(e) {\n  e.preventDefault();\n  this.form.resetFields((model)=>{\n    this.setState({form:model})\n  });\n}\n\nrender() {\n  const {form,rules} = this.state;\n  const FormItem = Form.Item;\n  const formItemLayout = {\n    labelCol: {\n      xs: { span: 24 },\n      sm: { span: 4 },\n      className:"colspanlab"\n    },\n    wrapperCol: {\n      xs: { span: 24 },\n      sm: { span: 14 },\n      className:"colspan"\n    },\n  };\n  const wrapperCol = {\n    wrapperCol: {\n      xs: {span: 24, offset: 0, },\n      sm: {span: 14, offset: 4, },\n    },\n  }\n  return (\n    <Form style={{width:500}} ref={(component)=>{this.form=component}} model={form} rules={rules}>\n      <FormItem label={<span>\u7528\u6237\u540d</span>} field="name" {...formItemLayout} >\n        <Input \n          value={form.name} \n          preIcon="user"\n          placeholder="\u8bf7\u8f93\u5165\u7528\u6237\u540d"\n          onChange={this.onChange.bind(this, \'name\')} />\n      </FormItem>\n      <FormItem label="\u5bc6\u7801" field="password" {...formItemLayout} >\n        <Input \n          // \u6ce8\u610f\u5b57\u6bb5 password\n          value={form.password} \n          preIcon="unlock"\n          type="password"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          onChange={this.onChange.bind(this, \'password\')} />\n      </FormItem>\n      <FormItem label="\u90ae\u7bb1" field="email" {...formItemLayout} >\n        <Input \n          value={form.email}\n          placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1"\n          onChange={this.onChange.bind(this, \'email\')} />\n      </FormItem>\n      <FormItem {...wrapperCol}>\n        <Button size="small" type="primary" onClick={this.handleSubmit.bind(this)}>\u63d0\u4ea4</Button>\n        <Button size="small" onClick={this.handleReset.bind(this)}>\u91cd\u7f6e</Button>\n      </FormItem>\n    </Form>\n  )\n}\n```\n\x3c!--End--\x3e\n\n\n### \u8868\u5355\u5e03\u5c40\n\n\u8868\u5355\u6709\u4e09\u79cd\u5e03\u5c40\uff0clayout = `horizontal`\u6a2a\u3001`vertical`\u7ad6\u3001`inline`\u884c\u5185\uff1b\n\n\x3c!--DemoStart--\x3e \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    plainOptions:[\n        {color:"purple", value:\'horizontal\'},\n        {color:"orange", value:\'vertical\'},\n        {color:"green", value:\'inline\'}\n    ],\n    formLayout:\'vertical\',\n    form: {\n      name:\'wui\',\n      password: \'\',\n      email: \'\',\n    },\n    rules:{\n      name:[\n        { required: true, message: \'\u8bf7\u8f93\u5165\u6d3b\u52a8\u540d\u79f0\'},\n        { min: 5, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'}\n      ],\n      password:[\n        { required: true, message: \'\u4e0d\u80fd\u4e3a\u7a7a\uff01\'},\n        { min: 6, message: \'\u957f\u5ea6\u4e0d\u591f\uff01\'},\n        { max: 14, message: \'\u957f\u5ea6\u8d85\u51fa\uff01\'}\n      ],\n      email:[\n        {type: \'email\', message: \'\u8f93\u5165\u7684\u4e0d\u662fE-mail!\'}\n      ]\n    }\n  }\n}\n\nonChange(key,e, value) {\n  const {form} = this.state;\n  form[key] = value;\n  this.setState({form});\n}\n\nhandleSubmit(e) {\n  e.preventDefault();\n  this.form.validate((valid,dataValues) => {\n    console.log("\u8fd4\u56de\u5185\u5bb9:",dataValues,valid)\n    if (valid) {\n      alert(\'submit!\');\n    } else {\n      console.log(\'error submit!!\');\n      return false;\n    }\n  });\n}\n\nhandleReset(e) {\n  e.preventDefault();\n  this.form.resetFields((model)=>{\n    this.setState({form:model})\n  });\n}\n\nrender() {\n  const {form,rules,formLayout} = this.state;\n  const FormItem = Form.Item;\n  const TagGroup = Tag.Group;\n  const formItemLayout = {\n    labelCol: {\n      xs: { span: 24 },\n      sm: { span: 4 },\n      className:"colspanlab"\n    },\n    wrapperCol: {\n      xs: { span: 24 },\n      sm: { span: 14 },\n      className:"colspan"\n    },\n  };\n  const wrapperCol = {\n    wrapperCol: {\n      xs: {span: 24, offset: 0, },\n      sm: {span: 14, offset: 4, },\n    },\n  }\n  return (\n    <div>\n      <TagGroup \n        style={{marginBottom:25}}\n        options={this.state.plainOptions}\n        checked={true}\n        isRadio={true}\n        checkedValues={[this.state.formLayout]} \n        onChange={(e,checkedValues)=>{\n          console.log("checkedValues[0]::",checkedValues[0])\n          this.setState({formLayout:checkedValues[0]})\n        }}\n      />\n      <Form \n        layout={formLayout} \n        style={{width:formLayout == "inline"?"auto":500}} ref={(component)=>{this.form=component}} model={form} rules={rules}>\n        <FormItem label={<span>\u7528\u6237\u540d</span>} field="name" {...formItemLayout} >\n          <Input \n            value={form.name} \n            preIcon="user"\n            placeholder="\u8bf7\u8f93\u5165\u7528\u6237\u540d"\n            onChange={this.onChange.bind(this, \'name\')} />\n        </FormItem>\n        <FormItem label="\u5bc6\u7801" field="password" {...formItemLayout} >\n          <Input \n            // \u6ce8\u610f\u5b57\u6bb5 password\n            value={form.password} \n            preIcon="unlock"\n            type="password"\n            placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n            onChange={this.onChange.bind(this, \'password\')} />\n        </FormItem>\n        <FormItem label="\u90ae\u7bb1" field="email" {...formItemLayout} >\n          <Input \n            value={form.email}\n            placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1"\n            onChange={this.onChange.bind(this, \'email\')} />\n        </FormItem>\n        <FormItem {...wrapperCol}>\n          <Button size="small" type="primary" onClick={this.handleSubmit.bind(this)}>\u63d0\u4ea4</Button>\n          <Button size="small" onClick={this.handleReset.bind(this)}>\u91cd\u7f6e</Button>\n        </FormItem>\n      </Form>\n    </div>\n  )\n}\n```\n\x3c!--End--\x3e\n\n## API\n\n### Form\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| ref | React\u65b9\u6cd5\uff0c\u63d0\u4f9bForm\u7ec4\u4ef6\u5185\u90e8\u65b9\u6cd5\u8c03\u7528 | String | - |\n| model | \u8868\u5355\u6570\u636e\u5bf9\u8c61\uff0c\u4ee5\u53ca\u9a8c\u8bc1\u89c4\u5219 | Object | - |\n| layout | \u8868\u5355\u5e03\u5c40 `horizontal` `vertical` `inline` | String | `horizontal` |\n\n### Form refs\n\n```html\n<Form ref={(component)=>{this.form=component}}></Form>\n```\n\n\u4e0a\u9762\u5b9a\u4e49form\u7684ref\u503c\u8d4b\u503c\u7ed9`this.form`\n\n```js\n// \u8868\u5355\u91cd\u7f6e\nthis.form.resetFields((model)=>{\n  this.setState({form:model})\n});\n\n// \u8868\u5355\u9a8c\u8bc1\nthis.form.validate((valid,dataValues) => {\n  console.log("\u8fd4\u56de\u5185\u5bb9:",dataValues,valid)\n  if (valid) {\n    alert(\'submit!\');\n  } else {\n    console.log(\'error submit!!\');\n    return false;\n  }\n});\n```\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| validate | \u5bf9\u6574\u4e2a\u8868\u5355\u8fdb\u884c\u6821\u9a8c\u7684\u65b9\u6cd5 | Function(valid:Boolean,dataValues:Object) | - |\n| resetFields | \u5bf9\u6574\u4e2a\u8868\u5355\u8fdb\u884c\u91cd\u7f6e\uff0c\u5c06\u6240\u6709\u5b57\u6bb5\u503c\u91cd\u7f6e\u4e3a\u7a7a\u5e76\u79fb\u9664\u6821\u9a8c\u7ed3\u679c | Function(model:Object) | - |\n\n### Form model\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u8868\u5355\u6570\u636e\u5bf9\u8c61 | Object\u3001String\u3001Array | - |\n| rules | \u6821\u9a8c\u89c4\u5219\uff0c\u53c2\u8003\u4e0b\u65b9\u6587\u6863 | Object[] | - |\n\n\n### Form.Item \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| label | `label` \u6807\u7b7e\u7684\u6587\u672c | String\u3001ReactNode | - |\n| field | `field` \u57df\u7684\u540d\u79f0 | String\u3001ReactNode | - |\n| labelCol | `label` \u6807\u7b7e\u5e03\u5c40\uff0c\u540c `<Col>` \u7ec4\u4ef6\uff0c\u8bbe\u7f6e `span` `offset` \u503c\uff0c\u5982 `{span: 3, offset: 12}` \u6216 `sm: {span: 3, offset: 12}` | Object | - |\n| wrapperCol | \u9700\u8981\u4e3a\u8f93\u5165\u63a7\u4ef6\u8bbe\u7f6e\u5e03\u5c40\u6837\u5f0f\u65f6\uff0c\u4f7f\u7528\u8be5\u5c5e\u6027\uff0c\u7528\u6cd5\u540c `labelCol` | Object | - |\n| help | \u63d0\u793a\u4fe1\u606f\uff0c\u5982\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4f1a\u6839\u636e\u6821\u9a8c\u89c4\u5219\u81ea\u52a8\u751f\u6210 | String\u3001ReactNode | - |\n\n### \u6821\u9a8c\u89c4\u5219\n\n```js\n{\n    rules:[\n      { required: true, message: "\u8bf7\u8f93\u5165\u6d3b\u52a8\u540d\u79f0"},\n      { min: 12, message: "\u957f\u5ea6\u4e0d\u591f\uff01"}\n    ]    \n}\n```\n\n`rules` \u6821\u9a8c\u89c4\u5219\u5b9e\u4f8b\uff0c\u6821\u9a8c\u4f7f\u7528\u7684\u5305[async-validator](https://github.com/yiminghe/async-validator)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| message | \u6821\u9a8c\u6587\u6848\uff0c\u9519\u8bef\u63d0\u793a\u4fe1\u606f  |  string | - |\n| type    | \u5185\u5efa\u6821\u9a8c\u7c7b\u578b\uff0c[\u53ef\u9009\u9879](https://github.com/yiminghe/async-validator#type) | string | `string` |\n| required | \u662f\u5426\u5fc5\u9009  |  boolean | `false` |\n| whitespace | \u5fc5\u9009\u65f6\uff0c\u7a7a\u683c\u662f\u5426\u4f1a\u88ab\u89c6\u4e3a\u9519\u8bef | boolean | false |\n| len | \u5b57\u6bb5\u957f\u5ea6  |  number | - |\n| min | \u6700\u5c0f\u957f\u5ea6  |  number | - |\n| max | \u6700\u5927\u957f\u5ea6  |  number | - |\n| enum | \u679a\u4e3e\u7c7b\u578b  |  string | - |\n| pattern | \u6b63\u5219\u8868\u8fbe\u5f0f\u6821\u9a8c RegExp | - |\n| validator | \u81ea\u5b9a\u4e49\u6821\u9a8c\uff08\u6ce8\u610f\uff0ccallback \u5fc5\u987b\u88ab\u8c03\u7528\uff09 | Function(rule, value,callback) | - |\n'}});