'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.ycjx.index);
  router.post('/ycjx/login', controller.ycjx.login);
};
