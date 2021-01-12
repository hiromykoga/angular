import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Creados por mi
import { FormulariosModule } from './formularios/formularios.module';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { MenusModule } from './menus/menus.module';
import { ConceptosModule } from './conceptos/conceptos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulariosModule,
    PaginaPrincipalModule,
    MenusModule,
    ConceptosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
