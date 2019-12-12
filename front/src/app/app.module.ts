import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { PortalPComponent } from './component/portal-p/portal-p.component';
import { CrearCursoComponent } from './component/crear-curso/crear-curso.component';
import { MiscursosComponent } from './component/miscursos/miscursos.component';
import { NotasComponent } from './component/notas/notas.component';
import { ControlesComponent } from './component/controles/controles.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'portal', component: PortalPComponent },
  { path: 'portal/crearcurso', component: CrearCursoComponent },
  { path: 'portal/miscursos', component: MiscursosComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'controles', component: ControlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PortalPComponent,
    CrearCursoComponent,
    MiscursosComponent,
    NotasComponent,
    ControlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
