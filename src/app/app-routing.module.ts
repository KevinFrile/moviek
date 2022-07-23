import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerMasComponent } from './pages/ver-mas/ver-mas.component';
import { MoviekComponent } from './components/moviek/moviek.component';

const routes: Routes = [
  { path: 'home', component: MoviekComponent },
  { path: 'verMas', component: VerMasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


