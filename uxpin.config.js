module.exports = {
    components: {
      categories: [
        {
          name: "Layout",
          include: [
            "src/Popover/Popover.js",
          ]
        },
        {
          name: "Navigation",
          include: [
            "src/Button/Button.js",
            "src/Breadcrumbs/Breadcrumbs.js",
            "src/Link/Link.js"
          ]
        },
        {
          name: "Display",
          include: [
            "src/Avatar/Avatar.js",
            "src/Badge/Badge.js",
            'src/Image/Image.js',
            "src/Text/Text.js",
            // "src/LoadingElastic/LoadingElastic.js",
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  