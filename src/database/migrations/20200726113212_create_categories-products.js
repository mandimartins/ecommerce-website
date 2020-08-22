exports.up = function (knex) {
  return knex.schema.createTable('categories_products', (table) => {
    table.increments('id').notNullable();
    table
      .integer('product_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('products');
    table
      .integer('categorie_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories_products');
};
