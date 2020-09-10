exports.seed = function(knex) {
  return knex('quantity').insert([
    {amount: '1 cup'},
    {amount: '1 teaspoon'},
  ])
};
