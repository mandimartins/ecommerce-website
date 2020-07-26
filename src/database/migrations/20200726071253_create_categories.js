exports.up = function (knex) {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id').notNullable();
    table.string('category');
    table.string('description');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};
