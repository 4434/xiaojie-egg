/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
    listen: {
      path: '',
      port: 80,
      hostname: '0.0.0.0',
    }
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565166725905_5646';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.view = {
    mapping: {'.html': 'ejs'} 
  };

  return {
    ...config,
    ...userConfig,
  };
};
