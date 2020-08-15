const knex = require('knex');
const connection = require('../../src/database/connection');
const app = require('../../src/app.js')(connection);

const supertest = require('supertest');
const fetch = supertest(app);

afterAll(() => {
  connection.destroy();
});

test('it should be able to login', async () => {
  const user = {
    email: 'admin@devshop.com.br',
    passwd: 'hardpasswd',
  };

  const response = await fetch.post('/login').send(user);
  expect(response.status).toBe(302);
});

test('it should not be able to login with wrong credentials', async () => {
  const user = {
    email: 'admin@devshop.com.br',
    passwd: 'wrongpassword',
  };

  const response = await fetch.post('/login').send(user);
  expect(response.status).toBe(400);
});

test('it should be able to logout', async () => {
  const response = await fetch.get('/logout');
  expect(response.status).toBe(302);
});
