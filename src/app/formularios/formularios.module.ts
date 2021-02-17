import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { FormularioUnoComponent } from '../formularios/formulario-uno/formulario-uno.component';

@NgModule({
  declarations: [FormularioUnoComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[FormularioUnoComponent]
})
export class FormulariosModule { }
