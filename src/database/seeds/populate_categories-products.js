exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories_products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories_products').insert([
        { product_id: 1, categorie_id: 1 },
        { product_id: 2, categorie_id: 1 },
        { product_id: 3, categorie_id: 1 },
        { product_id: 4, categorie_id: 1 },
        { product_id: 5, categorie_id: 2 },
        { product_id: 6, categorie_id: 2 },
        { product_id: 7, categorie_id: 2 },
        { product_id: 8, categorie_id: 2 },
        { product_id: 9, categorie_id: 2 },
        { product_id: 10, categorie_id: 2 },
        { product_id: 11, categorie_id: 3 },
        { product_id: 12, categorie_id: 3 },
        { product_id: 13, categorie_id: 3 },
        { product_id: 14, categorie_id: 3 },
        { product_id: 15, categorie_id: 3 },
        { product_id: 16, categorie_id: 3 },
        { product_id: 17, categorie_id: 3 },
        { product_id: 18, categorie_id: 3 },
        { product_id: 19, categorie_id: 3 },
        { product_id: 20, categorie_id: 3 },
        { product_id: 21, categorie_id: 3 },
        { product_id: 22, categorie_id: 3 },
        { product_id: 23, categorie_id: 3 },
        { product_id: 24, categorie_id: 3 },
        { product_id: 25, categorie_id: 3 },
        { product_id: 26, categorie_id: 4 },
        { product_id: 27, categorie_id: 4 },
        { product_id: 28, categorie_id: 4 },
        { product_id: 29, categorie_id: 4 },
        { product_id: 30, categorie_id: 4 },
      ]);
    });
};
