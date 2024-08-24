import { Routes } from '@angular/router';
import { TransicionesComponent } from './Components/transiciones/transiciones.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';
import { DivsResponsiveComponent } from './Components/divs-responsive/divs-responsive.component';
import { CronogramaComponent } from './Components/cronograma/cronograma.component';
import { TablaesquematicaComponent } from './Components/tablaesquematica/tablaesquematica.component';
import { HojavidaComponent } from './Components/hojavida/hojavida.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

export const routes: Routes = [
    {path:"Transiciones", component:TransicionesComponent},
    {path:"Presentacion", component:PresentacionComponent},
    {path:"DivsResponsive", component:DivsResponsiveComponent},
    {path:"Cronograma", component:CronogramaComponent},
    {path:"Tablaesquematica", component:TablaesquematicaComponent},
    {path:"Hojavida", component:HojavidaComponent},
    {path:"Formulario", component:FormularioComponent}
];
