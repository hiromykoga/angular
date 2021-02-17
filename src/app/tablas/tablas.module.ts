import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasUnoComponent } from './tablas-uno/tablas-uno.component';



@NgModule({
  declarations: [TablasUnoComponent],
  imports: [
    CommonModule
  ],
  exports: [TablasUnoComponent] 
})
export class TablasModule { }
