import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../service/api-peliculas.service';
import { PeliculasPopulares } from '../../models/PeliculasPopulares.model';

@Component({
  selector: 'app-moviek',
  templateUrl: './moviek.component.html',
  styleUrls: ['./moviek.component.css']
})
export class MoviekComponent implements OnInit {

 
  peliculas:PeliculasPopulares

  constructor( private apiPeliculasService:ApiPeliculasService) { 

    this.peliculas = {
      page : 0,
      results:[],
      total_pages: 0, 
      total_results:0
    }
    
  }
  
  ngOnInit(): void {
    this.apiPeliculasService.getPeliculasPopulares().subscribe( (res:any) => {
      this.peliculas = res  
      console.log(this.peliculas);
          
    })
    
  }

}


