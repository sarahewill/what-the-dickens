import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters-list/characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [{ path: 'view/:id', component: CharactersViewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
