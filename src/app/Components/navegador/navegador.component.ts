import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { TransicionesComponent } from '../transiciones/transiciones.component';
import { PresentacionComponent } from '../presentacion/presentacion.component';
import { DivsResponsiveComponent } from '../divs-responsive/divs-responsive.component';
import { CronogramaComponent } from '../cronograma/cronograma.component';
import { TablaesquematicaComponent } from '../tablaesquematica/tablaesquematica.component';
import { HojavidaComponent } from '../hojavida/hojavida.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    AsyncPipe,
    RouterOutlet,
    TransicionesComponent,
    PresentacionComponent,
    DivsResponsiveComponent,
    CronogramaComponent,
    TablaesquematicaComponent,
    HojavidaComponent,
    FormularioComponent,
  ]
})
export class NavegadorComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
