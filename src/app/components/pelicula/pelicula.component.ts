import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() titulo: string = 'no encontramos el titulo de esta pelicula';
  @Input() img: string = 'no encontramos la imagen de esta pelicula';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  verMas() {
  
    this.router.navigate(['/','verMas']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

}
