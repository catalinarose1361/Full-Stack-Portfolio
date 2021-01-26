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
                
                  '@primary-color': '#530EF0', // primary color for all components //
                  '@component-background': '#ffffff', // 
                  '@layout-body-background': '#ffffff', //
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
                  '@card-head-color': '@primary-color',
                  '@font-family': "'Tenor Sans', sans-serif"
                 
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };

