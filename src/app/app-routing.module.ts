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
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  {
    path: 'register',
    loadChildren: () => import('./modules/registration/registration.module').then((m) => m.RegistrationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
