import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PortalPComponent } from './component/portal-p/portal-p.component';
import { CrearCursoComponent } from './component/crear-curso/crear-curso.component';
import { MiscursosComponent } from './component/miscursos/miscursos.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'portal', component: PortalPComponent },
  { path: 'portal/crear curso', component: CrearCursoComponent },
  { path: 'portal/mis cursos', component: MiscursosComponent },
  { path: 'alumnos', component: AlumnosComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PortalPComponent,
    CrearCursoComponent,
    MiscursosComponent,
    AlumnosComponent
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
