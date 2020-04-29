import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  basePath = 'http://localhost:8080/touristAgency/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: sessionStorage.getItem('auth-token')
    })
  };

  getTours() {
    return this.http.get(this.basePath + 'tours', this.httpOptions);
  }
}
