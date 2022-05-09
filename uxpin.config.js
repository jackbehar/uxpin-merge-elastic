module.exports = {
    components: {
      categories: [
        {
          name: "Inputs",
          include: [
            "src/Button/Button.js",
            "src/Text/Text.js",
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  