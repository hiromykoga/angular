import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidosComponent } from './paginaprincipal/bienvenidos/bienvenidos.component';
import { FormularioUnoComponent } from './formularios/formulario-uno/formulario-uno.component';
import { GraficosUnoComponent } from './graficos/graficos-uno/graficos-uno.component';
import { TablasUnoComponent } from './tablas/tablas-uno/tablas-uno.component';
import { ErrorComponent } from './error/error.component';
import { MenugraficosComponent } from './graficos/menugraficos/menugraficos.component';
import { GraficosDosComponent } from './graficos/graficos-dos/graficos-dos.component';

const routes: Routes = [
  {path:"",component:BienvenidosComponent},
  {path:"formulariosuno",component:FormularioUnoComponent},
  {path:"tablasuno",component:TablasUnoComponent},
  {path:"menugraficos",component:MenugraficosComponent,
    children:[
    {path:"graficosuno",component:GraficosUnoComponent}, 
    {path:"graficosdos",component:GraficosDosComponent}
  ]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
