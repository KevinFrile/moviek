import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerMasComponent } from './pages/ver-mas/ver-mas.component';
import { MoviekComponent } from './components/moviek/moviek.component';

const routes: Routes = [
  { path: 'home/:id', component: MoviekComponent },
  { path: 'verMas/:id', component: VerMasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home/1' },
  { path: '**', pathMatch: 'full', redirectTo: 'home/1' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


