import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  endpoint = 'http://localhost:8080/api/libros';

  constructor(private httpClient: HttpClient) { }

  getLibros(){
      return this.httpClient.get(this.endpoint);
  }
}
