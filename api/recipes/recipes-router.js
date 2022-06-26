const router = require('express').Router();

const Recipes = require('./recipes-model');

router.get('/:recipe_id', (request, response, next) => {
    Recipes.getRecipeById(request.params.recipe_id)
        .then(recipe => {
            response.json(recipe);
        })
        .catch(next);
});

module.exports = router;