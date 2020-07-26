exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('passwd', 255).notNullable();
    table.string('email_checked', 255).notNullable();
    table.timestamps();
    table.string('roles', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
