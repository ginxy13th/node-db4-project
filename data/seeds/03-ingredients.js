
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'ground beef'},
    {name: 'minced garlic'},
    { name: 'mushrooms'}
  ])
};
