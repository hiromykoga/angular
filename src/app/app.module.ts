import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';

//Creados por mi
import { FormulariosModule } from './formularios/formularios.module';
import { PaginaPrincipalModule } from './paginaprincipal/pagina-principal.module';
import { MenusModule } from './menus/menus.module';
import { ConceptosModule } from './conceptos/conceptos.module';
import { GraficosModule } from './graficos/graficos.module';
import { TablasModule } from './tablas/tablas.module';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormulariosModule,
    PaginaPrincipalModule,
    MenusModule,
    ConceptosModule,
    GraficosModule,
    TablasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
