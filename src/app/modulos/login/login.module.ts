import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { OlvidarClaveComponent } from './olvidar-clave/olvidar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { VerificacionCodigoComponent } from './verificacion-codigo/verificacion-codigo.component';


@NgModule({
  declarations: [
    IniciarSesionComponent,
    CerrarSesionComponent,
    OlvidarClaveComponent,
    RecuperarClaveComponent,
    RegistrarseComponent,
    VerificacionCodigoComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class LoginModule { }
