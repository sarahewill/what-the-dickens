import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then((m) => m.CharactersModule),
  },
  { path: 'pubs', loadChildren: () => import('./modules/pubs/pubs.module').then((m) => m.PubsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
