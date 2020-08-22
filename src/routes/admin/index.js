const init = (db) => {
  const categories = require('./categories');

  const router = require('express').Router();

  router.use((req, res, next) => {
    if (req.session.user) {
      if (req.session.user.roles.indexOf('admin') < 0) {
        res.status(403).json({
          msg: 'Access denied',
        });
      } else {
        next();
      }
    } else {
      res.status(403).json({
        msg: 'Access denied',
      });
    }
  });

  router.get('/', (req, res) => {
    res.render('Admin/index');
  });
  router.use('/categorias', categories(db));
  // router.use('/produto',products(db))

  return router;
};
module.exports = init;
