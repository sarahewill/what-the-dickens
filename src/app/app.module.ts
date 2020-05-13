import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './components/messages/messages.component';
import { AppMaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FlexLayoutModule, AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
