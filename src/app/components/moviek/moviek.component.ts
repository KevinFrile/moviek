import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../service/api-peliculas.service';
import { PeliculasPopulares } from '../../models/PeliculasPopulares.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moviek',
  templateUrl: './moviek.component.html',
  styleUrls: ['./moviek.component.css']
})

export class MoviekComponent implements OnInit {


  disabledAtras:boolean = false
  paginaActivada: number = 1
  peliculas: PeliculasPopulares

  constructor(
    private apiPeliculasService: ApiPeliculasService,
    private rutaActiva: ActivatedRoute,
    public router: Router) {

    this.peliculas = {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0
    }

    let numeroPagina = Number(this.rutaActiva.snapshot.params['id'])
    this.paginaActivada = numeroPagina


  }

  ngOnInit(): void {


    this.obtenerPeliculasPopulares()
  }

  obtenerPeliculasPopulares() {

    // validacion de la url para no poder buscar paginas menores a 1
    if (this.paginaActivada <= 1) {
      this.paginaActivada = 1
      this.router.navigate(['/home', 1])

      this.disabledAtras = true
    } else{

      this.disabledAtras = false

    }


    this.apiPeliculasService.getPeliculasPopulares(this.paginaActivada).subscribe((res: any) => {
      this.peliculas = res
      console.log(this.peliculas);
    })
  }

  anteriorPagina() {

    // validacion para no poder buscar paginas menores a 1 
    if (this.paginaActivada <= 1) {
      this.paginaActivada = 1
      this.router.navigate(['/home', 1])

    } else {

      this.router.navigate(['/home', this.paginaActivada - 1])
      this.paginaActivada = this.paginaActivada - 1
      this.obtenerPeliculasPopulares()
    }


  }

  siguientePagina() {

    this.router.navigate(['/home', this.paginaActivada + 1])
    this.paginaActivada = this.paginaActivada + 1
    this.obtenerPeliculasPopulares()
  }

}


