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
  peliculas!: PeliculasPopulares
  loading:boolean = true
  errores:Array<string> = []

  constructor(
    private apiPeliculasService: ApiPeliculasService,
    private rutaActiva: ActivatedRoute,
    public router: Router) {

  }

  ngOnInit(): void {

    // obtenemos el numero de pagina
    let numeroPagina = Number(this.rutaActiva.snapshot.params['id'])
    this.paginaActivada = numeroPagina

    this.obtenerPeliculasPopulares()
  }

  obtenerPeliculasPopulares() {
    this.loading = true

    // validacion de la url para no poder buscar paginas menores a 1
    if (this.paginaActivada <= 1) {
      this.paginaActivada = 1
      this.router.navigate(['/home', 1])

      this.disabledAtras = true
    } else{

      this.disabledAtras = false
    }


    // peticion para obtener las peliculas de la pagina
    this.apiPeliculasService.getPeliculasPopulares(this.paginaActivada).subscribe((res: any) => {

      // guardamos la respuesta 
      this.peliculas = res

      // para que se pueda ver el loading (la pagina carga muy rapido)
      this.errores = []

      setTimeout(() => {
        this.loading = false
      }, 1000);
      
    },err=>{
      // obtenemos los errores
      this.errores = err.error.errors      

    })
  }

  anteriorPagina() {

    // validacion para no poder buscar paginas menores a 1 
    if (this.paginaActivada <= 1 || this.paginaActivada > 500) {

      this.paginaActivada = 1
      this.router.navigate(['/home', 1])
      this.obtenerPeliculasPopulares()

    } else {

      this.router.navigate(['/home', this.paginaActivada - 1])
      this.paginaActivada = this.paginaActivada - 1
      this.obtenerPeliculasPopulares()
    }


  }


  // se ejecuta al darle click a siguiente
  siguientePagina() {

    // cambaimos la url
    this.router.navigate(['/home', this.paginaActivada + 1])

    // cambiamos el numero de pagina
    this.paginaActivada = this.paginaActivada + 1

    // obtenemos las nuevas peliculas
    this.obtenerPeliculasPopulares()
  }

}


