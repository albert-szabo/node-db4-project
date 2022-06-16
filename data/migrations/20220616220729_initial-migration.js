exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            
        })
        .createTable('ingredients', table => {

        })
        .createTable('steps', table => {

        })
        .createTable('step_ingredients', table => {
            
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
