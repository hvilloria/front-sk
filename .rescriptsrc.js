const babelLoaderMatcher = rule => rule.loader && rule.loader.includes('babel-loader');

const oneOfFileLoaders = config => config.module.rules.find(rule => rule.oneOf).oneOf;

const enableBabelRc = config => {
  const fileLoaders = oneOfFileLoaders(config);
  fileLoaders.forEach(loader => {
    if (babelLoaderMatcher(loader)) {
      loader.options.babelrc = true;
    }
  });
}

const customConfig = config => {
  enableBabelRc(config);
  return config;
}

module.exports = [customConfig];
