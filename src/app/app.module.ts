import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaInicialComponent } from './components/portada-inicial/portada-inicial.component';
import { Page2Component } from './components/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaInicialComponent,
    Page2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
