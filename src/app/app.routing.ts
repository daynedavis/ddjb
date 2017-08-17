import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: RecipesComponent }
];

export const ComponentRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
