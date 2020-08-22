const User = require('../../app/models/user');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert({
        name: 'Admin',
        email: 'admin@devshop.com.br',
        passwd: User.generatePassHash('hardpasswd'),
        email_checked: true,
        created_at: new Date(),
        updated_at: new Date(),
        roles: 'admin,financial,costumer',
      });
    });
};
