import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MusicaComponent } from './musica/musica.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'categoria'},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'musica',  component: MusicaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
