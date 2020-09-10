const db = require('./data/config')

function getRecipes() {
  return db('recipes')
}

function getInstructions(recipe_id) {
  return db('steps')
    .where('steps.recipe_id')
}

function getShoppingList(recipe_id) {
  return db('ingredients')
  
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe