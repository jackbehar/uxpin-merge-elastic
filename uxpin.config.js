module.exports = {
    components: {
      categories: [
        {
          name: "Inputs",
          include: [
            "src/Button/Button.js",
            "src/Text/Text.js",
            "src/Avatar/Avatar.js",
            "src/Badge/Badge.js",
            "src/Breadcrumbs/Breadcrumbs.js"
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  