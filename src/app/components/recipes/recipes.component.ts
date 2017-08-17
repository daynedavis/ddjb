import { Component, OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'recipes-component',
  template: `
    <p>Something something {{title}}</p>
    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.recipe.label}}</li>
    </ul>
  `
})

export class RecipesComponent {
  recipes: any;
  title: String = "FitLab";

  constructor(@Inject(RecipesService) public _recipesService: RecipesService) {}

  ngOnInit() {
    let query = "chicken";
    this._recipesService.getRecipes(query)
      .subscribe((recipes: Observable<any>) => {
        this.handle(recipes);
      })
  }

  handle(recipes: any) {
    this.recipes = recipes.hits;
  }
}
