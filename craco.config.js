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
                  // dark: true, // 开启暗黑模式
                  // compact: true,
//                   '@primary-color': '#00887a', // primary color for all components
//                   '@link-color': '#f1b351', // link color
                 
// // @font-size-base: 14px; // major text font size
//                   '@heading-color': 'black', // heading text color
//                   '@text-color': 'black', // major text color
//                   '@text-color-secondary': 'black', // secondary text color
//                   // Layout
//                   '@layout-body-background': '#ffffff',
//                   '@layout-header-background': '#ffffff',
//                   '@layout-header-height': '64px',
//                   '@layout-header-padding': '0 50px',
//                   '@layout-header-color': '#ffffff',
//                   '@layout-footer-padding': '0 50px',
//                   '@layout-footer-background': '#ffffff',
//                   '@layout-sider-background': '#00887a',
//                   // Base background color for most components
//                   '@component-background': '#77a6f7',
//                   '@layout-sider-background-light': '#d1b8bb',
//                   '@layout-trigger-height': '300px',
//                   '@menu-bg': '@layout-sider-background',
               
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };

