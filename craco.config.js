/* craco.config.js */
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { 
                  '@primary-color': '#7f6f70', // primary color for all components
                  '@link-color': '#574647', // link color
                 
// @font-size-base: 14px; // major text font size
                  '@heading-color': '#d1b8bb', // heading text color
                  '@text-color': '#000000', // major text color
                  '@text-color-secondary': '#ffffff', // secondary text color
                  // Layout
                  '@layout-body-background': '#e5e5e5',
                  '@layout-header-background': '#d1b8bb',
                  '@layout-header-height': '64px',
                  '@layout-header-padding': '0 50px',
                  '@layout-header-color': '@text-color',
                  '@layout-footer-padding': '24px 50px',
                  '@layout-footer-background': '@layout-body-background',
// @layout-sider-background: @layout-header-background;
// @layout-trigger-height: 48px;
// @layout-trigger-background: #002140;
// @layout-trigger-color: #fff;
// @layout-zero-trigger-width: 36px;
// @layout-zero-trigger-height: 42px;
// // Layout light theme
// @layout-sider-background-light: #fff;
// @layout-trigger-background-light: #fff;
// @layout-trigger-color-light: @text-color;
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };

