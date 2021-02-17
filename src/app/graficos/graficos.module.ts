import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosUnoComponent } from './graficos-uno/graficos-uno.component';



@NgModule({
  declarations: [GraficosUnoComponent],
  imports: [
    CommonModule
  ],
  exports: [GraficosUnoComponent]
})
export class GraficosModule { }
