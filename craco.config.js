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

                    '@primary-color': '#2f54eb', // primary color for all components
                    '@link-color': '#faad14',  
                    '@success-color': '#52c41a' ,
                    '@warning-color': '#faad14',
                    '@error-color': '#f5222d', 
                    '@font-size-base': '20px' ,
                    '@heading-color': '#faad14', 
                    '@text-color': 'rgba(0, 0, 0, 0.65)' ,
                    '@text-color-secondary': 'rgba(0, 0, 0, 0.45)' ,
                    '@disabled-color': 'rgba(0, 0, 0, 0.25)' ,
                    '@border-radius-base': '2px' ,
                    '@border-color-base':'#d9d9d9'
                  

                      // major shadow for layers
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };

