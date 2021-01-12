import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { TestingPruebaComponent } from './testing-prueba/testing-prueba.component';



@NgModule({
  declarations: [TestingComponent, TestingPruebaComponent],
  imports: [
    CommonModule
  ]
})
export class ConceptosModule { }
