import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  fGroup: FormGroup = new FormGroup ({});
  constructor(
    private fb: FormBuilder,
  ) {
  
   
  }
  ngOnInit(){
    this.ConstruirFormulario();
  }

  IdentificarUsuario(){
    if(this.fGroup.invalid){
      alert ("Datos incorrectos");
    } else {
      alert ("Identificando...");
      //acá sigo todavía yo xd
      let usuario = this.fGroup.controls["usuario"].value;
      let clave = this.fGroup.controls["clave"].value;
      console.log(usuario);
      console.log(clave);

    }
    
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }

  ConstruirFormulario(){
    this.fGroup = this.fb.group ({
      usuario: ["",[Validators.required, Validators.email]],
      clave: ["",[Validators.required]]
    });

  }
}

