import path from 'path';

export const loaderOneOf = [
  [require.resolve('@kkt/loader-less'), {}],
];

export default (conf, { paths }, webpack) => {
  conf.resolve.alias = { '@': paths.appSrc };
  const pkg = require(path.resolve(process.cwd(), 'package.json'));

  const regexp = /^(ModuleScopePlugin)/;
  conf.resolve.plugins = conf.resolve.plugins.map((item) => {
    if (item.constructor && item.constructor.name && regexp.test(item.constructor.name)) {
      return null;
    }
    return item;
  }).filter(Boolean);

  conf.module.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });
  // 获取版本
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );
  return conf;
}

