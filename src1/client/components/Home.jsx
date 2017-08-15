import React from 'react';
import Title from './Title';
import styles from '../style/app.css';
import recipeFetcher from '../data/recipeFetcher';

export default class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: []
    }

    this.favorite = this.favorite.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.unfavorite = this.unfavorite.bind(this);
  }

  componentDidMount () {
    this.fetchFavorites();
  }

  async fetchRecipes () {
    let recipes = await recipeFetcher.getRecipes(this.recipeQuery.value, 0, 10);
    recipes = recipes.sort((recipeA, recipeB) => {
        return recipeA.recipe.calories - recipeB.recipe.calories
    });
    this.setState({ recipes });
    console.log(recipes);
  }

  async fetchFavorites () {
    const favorites = await recipeFetcher.getFavorites();
    this.setState({ favorites });
  }

  async favorite (recipe) {
    const favorites = await recipeFetcher.favoriteRecipe(recipe.recipe);
    this.setState({ favorites });
  }

  async unfavorite (id) {
    const favorites = await recipeFetcher.unfavoriteRecipe(id);
    this.setState({ favorites });
  }

  getRecipes () {
    const { recipes } = this.state;
    return recipes.map((recipe, idx) => {
      return (
        <div className={styles.recipe} key={`Recipe${idx}`}>
          {recipe.recipe.label}: {recipe.recipe.calories}
          <div className={styles.remove} onClick={() => this.favorite(recipe)}>Favorite</div>
        </div>
      );
    })
  }

  getFavorites () {
    const { favorites } = this.state;
    return favorites.map((favorite, idx) => {
      return (
        <div className={styles.recipe} key={`Favorite${idx}`}>
          {favorite.recipe.label}
          <div className={styles.remove} onClick={() => this.unfavorite(favorite._id)}>Remove</div>
        </div>
      );
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <Title title="Recipe Dashboard" />
          <input type="text" ref={(ref) => this.recipeQuery = ref} />
          <button className={styles.add} onClick={this.fetchRecipes}>Search Recipes</button>
          <div className={styles.recipesContainer}>
            <div className={styles.recipelist}>
              <h3>Search Results</h3>
              {this.getRecipes()}
            </div>
            <div className={styles.favorites}>
              <h3>Favorites</h3>
              {this.getFavorites()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
