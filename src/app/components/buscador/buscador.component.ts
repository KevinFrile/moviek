import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


  // inicializamos el formulario reactivo
  idForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });


  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }

  // se ejecuta cuando se desee buscar una pelicula por el id
  buscar(){

    //obtenemos el id del formulario
    let id = this.idForm.value.id;
   
   // vemos los detalles de esa pelicula
    this.router.navigate(['/verMas',id])
    
  }
}
