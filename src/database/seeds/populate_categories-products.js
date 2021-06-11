exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories_products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories_products").insert([
        { product_id: 1, categorie_id: 2 },
        { product_id: 2, categorie_id: 2 },
        { product_id: 3, categorie_id: 4 },
        { product_id: 4, categorie_id: 4 },
        { product_id: 5, categorie_id: 1 },
        { product_id: 6, categorie_id: 1 },
        { product_id: 7, categorie_id: 1 },
        { product_id: 8, categorie_id: 1 },
        { product_id: 9, categorie_id: 3 },
        { product_id: 10, categorie_id: 4 },
      ]);
    });
};
