'use strict';

const Wreck = require('wreck');
const Favorite = require('../models/favorite');

class recipeController {
  getFavorites(request, reply) {
    Favorite.find({}, function (err, favorites) {
      reply(favorites);
    });
  }

  getRecipes(request, reply) {
    const app_key = '20b9374bf59ff4f0f35dbea46f61bc0b';
    const app_id = '4de41410';
    const prefix = 'https://api.edamam.com/search?';
    const { query, from, to } = request.payload;

    Wreck.get(`${prefix}q=${query}&app_id=${app_id}&app_key=${app_key}&from=${from}&to=${to}`, (err, res, payload) => {
      const result = JSON.parse(payload);
      reply(result.hits);
    });
  }

  favoriteRecipe(request, reply) {
    const { recipe } = request.payload;
    const newFavorite = new Favorite({ recipe });

    newFavorite.save((err) => {
      if (err) throw err;

      Favorite.find({}, (err, favorites) => {
        reply(favorites);
      });

      console.log('Favorite saved successfully!');
    });
  }

  unfavoriteRecipe(request, reply) {
    const { id } = request.payload;

    Favorite.findOneAndRemove({ _id: id }, (err, favorite) => {
      if (err) throw err;

      Favorite.find({}, (err, favorites) => {
        reply(favorites);
      });
    });
  }
}

module.exports = new recipeController();