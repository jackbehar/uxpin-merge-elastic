module.exports = {
    components: {
      categories: [
        {
          name: "Layout",
          include: [
            "src/Panel/Panel.js",
            "src/Popover/Popover.js",
            "src/Spacer/Spacer.js"
          ]
        },
        {
          name: "Navigation",
          include: [
            "src/Button/Button.js",
            "src/Breadcrumbs/Breadcrumbs.js",
            "src/Facet/Facet.js",
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
            "src/Toast/Toast.js",
            // "src/LoadingElastic/LoadingElastic.js",
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  