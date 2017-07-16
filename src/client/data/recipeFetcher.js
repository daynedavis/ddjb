export default class recipeFetcher {
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
}
