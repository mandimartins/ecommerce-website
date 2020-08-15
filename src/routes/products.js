const init = (db) => {
  const router = require('express').Router();
  const products = require('../app/controllers/products')(db);
  router.get('/:id/:slug', products.getProduct);

  return router;
};

module.exports = init;
