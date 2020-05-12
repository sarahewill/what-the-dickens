import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';

@NgModule({
  declarations: [CharactersComponent, CharactersViewComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
