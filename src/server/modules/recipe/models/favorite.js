const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  recipe: { type: Object, required: true }
});

var Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;