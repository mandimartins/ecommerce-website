const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.test',
});

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },
};
