import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  // parametros que nos llegan desde el componente padre
  @Input() titulo: string = 'no encontramos el titulo de esta pelicula';
  @Input() img: string = 'no encontramos la imagen de esta pelicula';
  @Input() id: number = 0;


  // estado que cambia cuando la imagen carga
  load: boolean = true

  constructor(public router: Router) {
    
   }

  ngOnInit(): void {
  }

  // se ejecuta al darle click a una card
  verMas() {

    //pasamos el id para obtener la pelicula
    this.router.navigate(['/verMas', this.id])
  }

  // se ejecuta una vex la imagen carga
  imgCargada() {
    this.load = false
  }

}
