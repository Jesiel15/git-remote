import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesListService {

  constructor(private httpClient: Http) { }

  getHeroes(): any {
      return [{teste: 'a'}, {teste: 'b'}, {teste: 'c'}]
    // return this.httpClient.get('https://dog.ceo/api/breeds/list/all');
  }

}
