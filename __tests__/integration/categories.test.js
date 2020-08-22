const connection = require('../../src/database/connection');
const app = require('../../src/app.js')(connection);

const supertest = require('supertest');
const fetch = supertest.agent(app);

describe('Admin category', () => {
  beforeAll(async () => {
    const user = {
      email: 'admin@devshop.com.br',
      passwd: 'hardpasswd',
    };
    await fetch.post('/login').send(user);
  });

  afterAll(() => {
    connection.destroy();
  });

  test('it should be able to get categories', async () => {
    const response = await fetch.get('/admin/categorias');
    expect(response.status).toBe(200);
  });

  test('it should be able to create a new category', async () => {
    const category = {
      category: 'New Jest category',
      description: 'lorem impsum',
    };
    const response = await fetch.post('/admin/categorias/nova').send(category);
    expect(response.status).toBe(302);
  });

  test('it should be able to update a category', async () => {
    const category = {
      category: 'Updated Jest category',
      description: 'lorem impsum',
    };

    const response = await fetch
      .post('/admin/categorias/editar/1')
      .send(category);
    expect(response.status).toBe(302);
  });

  test('it should be able to delete a category', async () => {
    const response = await fetch.get(`/admin/categorias/excluir/1`);
    expect(response.status).toBe(302);
  });
});
