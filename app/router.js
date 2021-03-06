'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/about', controller.home.about);
  router.get('/product', controller.home.product);
  router.get('/contact', controller.home.contact);
};
