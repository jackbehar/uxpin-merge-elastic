module.exports = {
    components: {
      categories: [
        {
          name: "Layout",
          include: [
            "src/Accordion/Accordion.js",
            "src/BottomBar/BottomBar.js",
            "src/FlexItem/FlexItem.js",
            "src/FlexGroup/FlexGroup.js",
            "src/Flyout/Flyout.js",
            "src/HorizontalRule/HorizontalRule.js",
            "src/Panel/Panel.js",
            "src/PageHeader/PageHeader.js",
            "src/Popover/Popover.js",
            "src/Spacer/Spacer.js",
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
            "src/CallOut/CallOut.js",
            "src/Card/Card.js",
            "src/Health/Health.js",
            'src/Image/Image.js',
            "src/NotificationEvent/NotificationEvent.js",
            "src/Stat/Stat.js",
            "src/Text/Text.js",
            "src/Title/Title.js",
            "src/Toast/Toast.js",
            "src/ToolTip/ToolTip.js",
            "src/Icon/Icon.js",
            "src/LoadingElastic/LoadingElastic.js",
          ]
        }

      ],
      wrapper: './src/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: './uxpin.webpack.config.js',
    },
    name: "ElasticUI"
  };
  