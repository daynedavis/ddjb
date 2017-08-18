import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipesService {

  constructor(private http: Http) {}

  getRecipes(query: String, from: number, to: number): Observable<any> {
    const body = { query, from, to };

    return this.http.post('/api/recipes', body)
      .map((res: Response) => res.json());
  }

}
