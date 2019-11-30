在 KKT 中使用
===

要开始使用 [uiw](https://github.com/uiwjs/uiw) 和 [kkt](https://github.com/kktjs/kkt-next)，请按照下列步骤操作：

1. 安装最新版本的 Node LTS。 [请参阅此处获取说明](https://docs.npmjs.com/getting-started/installing-node)
2. 使用以下命令创建新的 `kkt` 项目：

你可以直接通过下面命令初始化一个工程，直接开始开发

```bash
npx create-kkt my-app -e uiw
# or npm
npm create kkt my-app -e uiw
# or yarn
yarn create kkt my-app -e uiw
```

注意 [**npx**](https://github.com/npm/npm/releases/tag/v5.2.0) 命令只在 npm 5.2+ 或更高版本中支持。

你也可以使用 [kkt](https://github.com/kktjs/kkt-next) 工具通过下面步骤，一步一步的创建一个 [kkt](https://github.com/kktjs/kkt-next) 工程

```bash
npx create-kkt my-app
```

此时，您将能够在本地启动默认 `kkt` 应用程序：

```bash
cd my-app
npm start
```

有关 `KKT` 的更多信息，[请参阅自述文件](https://github.com/kktjs/kkt-next)。

3. 安装 [uiw](https://github.com/uiwjs/uiw) 包：

```bash
npm i uiw
```

4. 打开 `src/App.js` 并将内容替换为：

```jsx
import React, { Component } from 'react';
import { Button } from 'uiw';

export default class App extends Component {
  render() {
    return <Button size="small" type="primary">Click Me</Button>;
  }
}
```