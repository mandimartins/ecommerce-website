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
      secret: process.env.SESSION_SECRET,
      name: process.env.SESSION_NAME,
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
  app.use((req, res) => {
    res.status(404).send('<h1> Page not found </h1>');
  });

  return app;
};

module.exports = init;
