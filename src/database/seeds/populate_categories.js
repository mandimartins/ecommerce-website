exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { category: 'category one' },
        { category: 'category two' },
        { category: 'category three' },
        { category: 'category four' },
      ]);
    });
};
