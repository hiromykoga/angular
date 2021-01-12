import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuUnoComponent } from './menu-uno/menu-uno.component';



@NgModule({
  declarations: [MenuUnoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuUnoComponent
  ]
})
export class MenusModule { }
