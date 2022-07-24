import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../service/api-peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../../models/pelicula.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {


  pelicula!: Pelicula;
  loading: boolean = true
  errores: Array<string> = []

  constructor(
    private apiPeliculasService: ApiPeliculasService,
    private rutaActiva: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    this.obtenerPelicula()
  }

  obtenerPelicula(){
    // obtenemos el id de los parametros por url
    let idPelicula = Number(this.rutaActiva.snapshot.params['id'])

    // hacemos la peticion con el is obtenido
    this.apiPeliculasService.getPelicula(idPelicula).subscribe((res: any) => {

      // guardamos la respuesta en peliculas pra poder mostrar la informacion en el html
      this.pelicula = res
      // para que se pueda ver el loading (la pagina carga muy rapido)
      setTimeout(() => {
        this.loading = false
      }, 1000);

      this.errores = []

    }, err => {

      console.log(err);
      
      this.errores = []
      // si sucede un error se ejecuta en el html un ngfor con los posibles errores
      let error = err.error.status_message
      this.errores.push(error)
      
    })
  }

  // se ejecuta cuando el usuario quiera volver a la lista de peliculas
  atras() {
    this.location.back();
    this.obtenerPelicula()
  }
}
