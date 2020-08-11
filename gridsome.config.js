const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/**/*.scss'),
      ],
    })
}

module.exports = {
  siteName: "A.N. website",
  siteUrl: `https://www.ntony.netlify.app`,
  titleTemplate: "%s | ntony",
  siteDescription: "Some info about myself",
  plugins: [
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    });
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: () => {
    return {
      plugins: [
        new PrerenderSPAPlugin(
          path.resolve(__dirname, 'dist'),
          ['/'],
        ),
      ]
    }
  }
};
