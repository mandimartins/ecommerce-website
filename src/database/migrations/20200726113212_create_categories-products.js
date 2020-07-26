exports.up = function (knex) {
  return knex.schema.createTable('categories_products', (table) => {
    table.increments('id').notNullable();
    table.integer('product_id').notNullable();
    table.integer('categorie_id').notNullable();

    table.foreign('product_id').references('id').inTable('products');
    table.foreign('categorie_id').references('id').inTable('categories');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories_products');
};
