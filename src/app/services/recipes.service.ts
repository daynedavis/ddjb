import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipesService {

  constructor(private http: Http) {}

  getRecipes(query: String): Observable<any> {
    const app_key = '20b9374bf59ff4f0f35dbea46f61bc0b';
    const app_id = '4de41410';
    const prefix = 'https://api.edamam.com/search?';
    const from = 1;
    const to = 10;

    return this.http.get(`${prefix}q=${query}&app_id=${app_id}&app_key=${app_key}&from=${from}&to=${to}`)
      .map((res: Response) => res.json());
  }

}
