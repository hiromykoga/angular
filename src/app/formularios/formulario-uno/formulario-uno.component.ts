import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css']
})
export class FormularioUnoComponent implements OnInit {

  titulo:String = 'Formulario normal';
  constructor() { }

  ngOnInit(): void {
  }

}
