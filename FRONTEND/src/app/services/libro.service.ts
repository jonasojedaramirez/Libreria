import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  endpoint = 'http://localhost:8080/api/libros';

  constructor(private httpClient: HttpClient) { }

  create(libro: any, blob: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("titulo", libro.titulo);
    body.append("autor", libro.autor);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
  }

  getLibros() {
    return this.httpClient.get(this.endpoint);
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
