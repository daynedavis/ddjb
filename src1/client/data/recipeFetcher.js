export default class recipeFetcher {
  static async favoriteRecipe(recipe) {
    const request = new Request('/api/recipes/favorites', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ recipe })
    });

    const res = await fetch(request);
    const favorites = await res.json();
    return favorites;
  }

  static async getFavorites() {
    const request = new Request('/api/recipes/favorites', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const res = await fetch(request);
    const favorites = await res.json();
    return favorites;
  }

  static async getRecipes(query, from, to) {
    const request = new Request('/api/recipes', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ query, from, to })
    });

    const res = await fetch(request);
    const recipes = await res.json();
    return recipes;
  }

  static async unfavoriteRecipe(id) {
    const request = new Request('/api/recipes/favorites', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'DELETE',
      body: JSON.stringify({ id })
    });
    const res = await fetch(request);
    const favorites = await res.json();
    return favorites;
  }
}
