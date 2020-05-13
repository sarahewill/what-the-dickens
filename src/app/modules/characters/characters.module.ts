import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters-list/characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CharactersComponent, CharactersViewComponent],
  imports: [CommonModule, AppMaterialModule, CharactersRoutingModule, MatIconModule, FlexLayoutModule],
})
export class CharactersModule {}
