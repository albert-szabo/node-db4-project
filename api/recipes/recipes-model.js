const database = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipeRow = await database('recipes').where('recipe_id', recipe_id).first();

    const recipe = {
        recipe_id: recipeRow.recipe_id,
        recipe_name: recipeRow.recipe_name,
        created_at: Date.now().toLocaleString(),


    };

    return recipe;
}

module.exports = { getRecipeById };