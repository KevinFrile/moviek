import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  constructor(private http:HttpClient) { }

  URL = `https://api.themoviedb.org/3/movie/`

  getPeliculasPopulares(){

    const query = `${this.URL}popular?api_key=eb3e397f0b1fafd1faad981453264da2&language=es-ES&page=500`
    return this.http.get(query);
  
  }

}
