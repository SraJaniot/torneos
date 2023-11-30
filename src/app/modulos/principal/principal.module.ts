import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { EntradaPrincipalComponent } from './entrada-principal/entrada-principal.component';


@NgModule({
  declarations: [
    EntradaPrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
