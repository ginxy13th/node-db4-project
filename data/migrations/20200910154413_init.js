
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments('id')
      table.string('name').nonNullable().unique()
      table.string('quantity.amount')
        .references('quantity.amount')
        .nonNullable()
    table.string('ingredients.name')
        .references('ingredients.name')
        .nonNullable()
    table.string('steps.description')
        .references('steps.description')
        .nonNullable()
  })

  .createTable('steps', table => {
      table.increments('id')
      table.string('description').nonNullable().unique()
      table.integer('recipes.id').references('recipes.id').nonNullable()
      table.integer('step').nonNullable().unsigned()
  })

  .createTable('ingredients', table => {
      table.increments('id')
      table.string('name').nonNullable().unique()
      table.string('quantity.amount').references('quantity.amount')
  })

  .createTable('quantity', table => {
      table.increments('id')
      table.string('amount').nonNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('quantity')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
