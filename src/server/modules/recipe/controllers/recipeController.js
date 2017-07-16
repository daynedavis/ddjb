'use strict'; 

const Wreck = require('wreck');

class recipeController {
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
}

module.exports = new recipeController();