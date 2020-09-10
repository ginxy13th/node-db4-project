
exports.seed = function(knex) {
  return knex('steps').insert([
    { recipes_id: 1, description: 'Step 1 for Spaghetti', step: 1},
    { recipes_id: 1, description: 'Step 2 for Spaghetti', step: 2},
    {recipes_id: 1, description: 'Step 3 for Spaghetti', step: 3},
    {recipes_id: 2, description: 'Step 1 for Burgerdilla', step: 1},
    {recipes_id: 2, description: 'Step 2 for Burgerdilla', step: 2},
    {recipes_id: 2, description: 'Step 3 for Burgerdilla', step: 3},
    {recipes_id: 2, description: 'Step 4 for Burgerdilla', step: 4},

  ])
};
