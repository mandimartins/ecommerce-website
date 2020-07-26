const db = require('./database/connection');

db.on('query', (query) => {
  console.log('SQL: ', query.sql);
});

const app = require('./app/app')(db);

const port = process.env.PORT || 5000;

const user = require('./app/models/user');
user.initialUser(db)();

app.listen(port, (err) => {
  if (err) {
    console.log(`Server can't start`, err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
