import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkComponent } from './walk.component';
import { WalkRoutingModule } from './walk-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WalkComponent],
  imports: [
    CommonModule,
    WalkRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class WalkModule {}
