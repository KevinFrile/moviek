import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  constructor(private http:HttpClient) { }

  URL = `https://api.themoviedb.org/3/movie/`

  getPeliculasPopulares(page:number){

    const query = `${this.URL}popular?api_key=${environment.key}&language=es-ES&page=${page}`
    return this.http.get(query);
  }

  getPelicula(id:number){
    const query =  `${this.URL}${id}?api_key=${environment.key}&language=es-ES`
    return this.http.get(query);
  }

}
