import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { OlvidarClaveComponent } from './olvidar-clave/olvidar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VerificacionCodigoComponent } from './verificacion-codigo/verificacion-codigo.component';

const routes: Routes = [

  {
    path: "iniciar-sesion",
    component: IniciarSesionComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path: "registrarse",
    component: RegistrarseComponent
  },
  {
    path: "olvidar-clave",
    component: OlvidarClaveComponent
  },
  {
    path: "recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path: "verificacion-codigo",
    component: VerificacionCodigoComponent
  }










];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
