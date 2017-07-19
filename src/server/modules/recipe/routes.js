'use strict';

const recipeController = require('./controllers/recipeController');

module.exports = [
    {
        method: 'POST',
        path: '/api/recipes/favorites',
        handler: recipeController.favoriteRecipe
    },
    {
        method: 'GET',
        path: '/api/recipes/favorites',
        handler: recipeController.getFavorites
    },
    {
        method: 'POST',
        path: '/api/recipes',
        handler: recipeController.getRecipes
    },
    {
        method: 'DELETE',
        path: '/api/recipes/favorites',
        handler: recipeController.unfavoriteRecipe
    }
];


