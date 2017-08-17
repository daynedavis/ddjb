import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common'; // We can use these when we actually deploy for consistent routing that is machine agnostic

// Components
import { AppComponent }  from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';

// Routes
import { ComponentRoutes } from './app.routing';

// Services
import { RecipesService } from './services/recipes.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    ComponentRoutes
  ],
  declarations: [
    AppComponent,
    RecipesComponent
  ],
  providers: [
    RecipesService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
