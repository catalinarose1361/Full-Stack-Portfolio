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
                
                  '@primary-color': '#b72c2c', // primary color for all components //
                  '@component-background': '#b72c2c', // 
                  '@layout-body-background': '#fffdf6', //
                  '@font-size-base': '20px', // major text font size
                  '@layout-header-background': '@layout-body-background', //                 
                  '@layout-header-color': '@layout-body-background', // 
                  '@menu-bg': '@layout-body-background', //nav menu background color
                  '@link-color': '@primary-color', // link color // 
                  '@menu-popup-bg' : '@layout-body-background',
                  '@collapse-content-bg' : '@layout-body-background',
                  '@card-head-extra-color': 'layout-body-background',
                  '@primary-5' : '@primary-color',
                  '@border-style-base': 'none',
                  '@carousel-dot-height': '10px',
                  '@card-head-color': '@layout-body-background'
                 
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };

