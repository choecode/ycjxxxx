/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * 
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630380700901_86411111';

  // add your middleware config here
  config.middleware = [];
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  

  config.cluster = {
    listen: {
      path: '',
      port: 6382,
      hostname: '0.0.0.0',
    }
};

  
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };

  

  config.view = {
    defaultExtension: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
      // '.js': 'assets',
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};
