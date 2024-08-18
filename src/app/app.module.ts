import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderRickComponent } from './header-rick/header-rick.component';
import { HomeComponent } from './home/home.component';
import { InicioRickComponent } from './conteudo-rick/inicio-rick/inicio-rick.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderRickComponent,
    HomeComponent,
    InicioRickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
