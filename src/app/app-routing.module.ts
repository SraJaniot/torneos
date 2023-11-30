import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [

  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo: "/inicio"
  },
  {
    path:"login",
    loadChildren: () => import('./modulos/login/login.module').then(modulo => modulo.LoginModule)
  },
  {
    path: "principal",
    loadChildren: () => import('./modulos/principal/principal.module').then(modulo => modulo.PrincipalModule)

  },

  {
    path:"**",
    component: RutaNoEncontradaComponent


  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
