
exports.up = function (knex) {
   return knex.schema.createTable('recipes', table => {
     table.increments('id')
     table.text('name').unique().notNull()
   })
 
    .createTable('steps', table => {
     table.increments('id').primary()
     table.text('description').notNull()
     table
       .integer('recipes_id')
       .references('id')
       .inTable('recipes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
     table
       .integer('step')
   })
 
   .createTable('ingredients', table => {
      table.increments('id').primary()
     table.text('name').unique().notNull()
   })
 
    .createTable('quantity', table => {
     table.increments('id')
     table.text('qty')
   })
 
    .createTable('unit', table => {
     table.increments('id')
     table.text('description')
   })
 
    .createTable('recipes_ingredients', table => {
     table
       .integer('recipe_id')
       .references('id')
       .inTable('recipes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
     table
       .integer('ingredient_id')
       .references('id')
       .inTable('ingredients')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
     table.primary(['ingredient_id', 'recipe_id'])
   })
 }
 
 exports.down = function (knex) {
    knex.schema.dropTableIfExists('recipes_ingredients')
    knex.schema.dropTableIfExists('unit')
    knex.schema.dropTableIfExists('quantity')
    knex.schema.dropTableIfExists('ingredients')
    knex.schema.dropTableIfExists('steps')
    knex.schema.dropTableIfExists('recipes')
 }