
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'spaghetti'},
    { name: 'burgerdilla'},
  ])
};
