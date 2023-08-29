import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaInicialComponent } from './components/portada-inicial/portada-inicial.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaInicialComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
