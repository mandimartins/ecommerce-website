const init = (db) => {
  const express = require('express');
  const router = express.Router();

  const categories = require('../app/controllers/categories')(db);

  router.get('/:id/:slug', categories.getCategories);

  return router;
};

module.exports = init;
