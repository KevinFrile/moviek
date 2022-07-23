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

  video: boolean = false
  pelicula!: Pelicula;
  loading: boolean = true

  errores: Array<string> = []

  constructor(
    private apiPeliculasService: ApiPeliculasService,
    private rutaActiva: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    let idPelicula = Number(this.rutaActiva.snapshot.params['id'])

    this.apiPeliculasService.getPelicula(idPelicula).subscribe((res: any) => {
      this.pelicula = res
      console.log(this.pelicula);

      // para que se pueda ver el loading (la pagina carga muy rapido)
      setTimeout(() => {
        this.loading = false
      }, 1000);

    }, err => {
      this.errores = err.error.errors
      console.log(this.errores);

    })

  }

  atras() {
    this.location.back();
  }
}
