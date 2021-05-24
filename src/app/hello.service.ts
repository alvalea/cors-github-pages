import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  hello() {
	  return this.http.get<String>(this.url)
  }
}
