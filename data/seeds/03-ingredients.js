
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'ground beef', amount: '1 cup'},
    {name: 'minced garlic', amount: '1 teaspoon'},
    { name: 'mushrooms', amount: '1 cup'}
  ])
};
