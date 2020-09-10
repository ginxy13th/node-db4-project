
exports.up = function (knex) {
    knex.schema.createTable('recipes', table => {
     table.increments('id')
     table.text('name').unique().notNull()
   })
 
    knex.schema.createTable('steps', table => {
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
 
    knex.schema.createTable('ingredients', table => {
     table.increments('id').primary()
     table.text('name').unique().notNull()
   })
 
    knex.schema.createTable('quantity', table => {
     table.increments('id')
     table.text('qty')
   })
 
    knex.schema.createTable('unit', table => {
     table.increments('id')
     table.text('description')
   })
 
    knex.schema.createTable('recipes_ingredients', table => {
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