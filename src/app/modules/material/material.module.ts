import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule, MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [MatSliderModule, MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule],
})
export class AppMaterialModule {}
