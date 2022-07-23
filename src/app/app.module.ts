import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviekComponent } from './components/moviek/moviek.component';
import { VerMasComponent } from './pages/ver-mas/ver-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    BuscadorComponent,
    MoviekComponent,
    VerMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
