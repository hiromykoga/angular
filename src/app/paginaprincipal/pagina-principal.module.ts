import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';



@NgModule({
  declarations: [BienvenidosComponent],
  imports: [
    CommonModule
  ],
  exports: [BienvenidosComponent]
})
export class PaginaPrincipalModule { }
