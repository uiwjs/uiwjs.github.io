webpackJsonp([5],{878:function(n,e){n.exports="\u5b9a\u5236\u4e3b\u9898\n===\n\n\u6837\u5f0f\u4f7f\u7528\u4e86 [`Less`](http://lesscss.org/) \u4f5c\u4e3a\u5f00\u53d1\u8bed\u8a00\uff0c\u5e76\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u5168\u5c40/\u7ec4\u4ef6\u7684\u6837\u5f0f\u53d8\u91cf\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002\u4f7f\u7528 [`modifyVars`](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) \u7684\u65b9\u5f0f\u6765\u8986\u76d6\u53d8\u91cf\n\n> \u4e3b\u9898\u66f4\u6362\u53ea\u9700\u8981 `less-loader` \u7684 `webpack` \u76f8\u5173\u914d\u7f6e\uff0c\u914d\u7f6e\u53c2\u6570 modifyVars\u5373\u53ef\u3002\n\n```js\nmodule.exports = {\n    //'primary-color': '#1DA57A',\n    //'link-color': '#1DA57A',\n    //'border-radius-base': '2px',\n    '@font-size-base': '14px',\n    '@icon-url': '\"/assets/iconfont/iconfont\"'\n};\n```\n\n\u4e0b\u9762\u5728 `webpack` \u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\uff0c\u66f4\u6539\u4e3b\u9898\u989c\u8272\n\n```js\n//\u81ea\u5b9a\u4e49\u4e3b\u9898\nvar theme = require('./theme');\nvar modifyVars = theme;\n\n....\n\n{\n    test: /\\.less$/,\n    loader: ['style-loader', 'css-loader', `less-loader?{\"sourceMap\":true,\"modifyVars\":${JSON.stringify(modifyVars)}}`]\n}\n...\n\n```\n\n\u66f4\u591a `webpack` \u5176\u4ed6\u914d\u7f6e\u9879\uff0c\u66f4\u6539\u4e3b\u9898\u989c\u8272\uff0c\u56fe\u6807\u5b57\u4f53\n\n```js\n{\n  test: /\\.less$/,\n  use: [\n    require.resolve('style-loader'),\n    {\n      loader: require.resolve('css-loader'),\n      options: {\n        importLoaders: 1,\n      },\n    },\n    {\n      loader: require.resolve('postcss-loader'),\n      options: {\n        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n        plugins: () => [\n          require('postcss-flexbugs-fixes'),\n          autoprefixer({\n            browsers: [\n              '>1%',\n              'last 4 versions',\n              'Firefox ESR',\n              'not ie < 9', // React doesn't support IE8 anyway\n            ],\n            flexbox: 'no-2009',\n          }),\n        ],\n      },\n    },\n    {\n      loader: require.resolve('less-loader'),\n      options: {\n        modifyVars: {\n          '@icon-url': '\"~font-file....\"',\n        },\n      },\n    },\n  ],\n},\n```\n"}});