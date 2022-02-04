import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private myAppUrl = "https://localhost:44368/api/";
  private myApiUrl = "libro/"

  constructor(private http: HttpClient) { }

  getListBooks(filtro: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + filtro);
  }
}
