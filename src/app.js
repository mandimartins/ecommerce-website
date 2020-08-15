const init = (db) => {
  const path = require('path');
  const category = require('./app/models/category')(db);
  const routes = require('./routes/index');
  const bodyParser = require('body-parser');
  const session = require('express-session');

  const express = require('express');
  const app = express();

  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded());

  app.use(
    session({
      secret: 'littlesecret!',
      name: 'sessionId',
    })
  );

  app.use(express.static(path.join(__dirname, 'public')));
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'app', 'views'));

  //middleware
  app.use(async (req, res, next) => {
    const categories = await category.getCategories();
    const { user } = req.session;
    res.locals = {
      categories,
      user,
    };
    next();
  });
  app.use(routes(db));

  return app;
};

module.exports = init;
