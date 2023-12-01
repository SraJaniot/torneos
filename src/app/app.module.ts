import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { EncabezadoComponent } from './publico/pag-maestra/encabezado/encabezado.component';
import { MenuLateralComponent } from './publico/pag-maestra/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './publico/pag-maestra/pie-pagina/pie-pagina.component';
import { ErrorDeServidorComponent } from './publico/errores/error-de-servidor/error-de-servidor.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    MenuLateralComponent,
    PiePaginaComponent,
    ErrorDeServidorComponent,
    RutaNoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
