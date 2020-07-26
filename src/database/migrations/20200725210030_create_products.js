exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').notNullable();
    table.string('name', 255).notNullable();
    table.string('description', 255);
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
