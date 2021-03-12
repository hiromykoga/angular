import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosUnoComponent } from './graficos-uno/graficos-uno.component';
import { MenugraficosComponent } from './menugraficos/menugraficos.component';

//si no se importa falla el routerLink
import { Routes, RouterModule } from '@angular/router';
import { GraficosDosComponent } from './graficos-dos/graficos-dos.component';

@NgModule({
  declarations: [GraficosUnoComponent, MenugraficosComponent, GraficosDosComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GraficosUnoComponent]
})
export class GraficosModule { }
