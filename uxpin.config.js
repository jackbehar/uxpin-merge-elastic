module.exports = {
    components: {
      categories: [
        {
          name: "Inputs",
          include: [
            "src/Avatar/Avatar.js",
            "src/Badge/Badge.js",
            "src/Breadcrumbs/Breadcrumbs.js",
            "src/Button/Button.js",
            "src/Text/Text.js",
            "src/Title/Title.js",
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  