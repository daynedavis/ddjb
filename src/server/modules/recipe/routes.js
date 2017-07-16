'use strict';

const recipeController = require('./controllers/recipeController');

module.exports = [
    {
        method: 'POST',
        path: '/api/recipes',
        handler: recipeController.getRecipes
    }
];


