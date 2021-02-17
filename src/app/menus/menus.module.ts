import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuUnoComponent } from './menu-uno/menu-uno.component';

//si no se importa falla el routerLink
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuUnoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuUnoComponent
  ]
})
export class MenusModule { }
