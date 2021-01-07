import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Creados por mi
import { FormulariosModule } from './formularios/formularios.module';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulariosModule,
    PaginaPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
