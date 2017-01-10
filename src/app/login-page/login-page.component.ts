import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
const bcrypt = require('bcryptjs');
import swal from 'sweetalert2'

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers:[ApiService]
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    if (localStorage.getItem("authUser")) this.router.navigateByUrl("/home");
  }

  onSubmit(form: NgForm) {
    this.apiService.getUsuarioEmail(form.value.email).subscribe(
      data => {
        console.log(data[0].contrasena);
        if (bcrypt.compareSync(form.value.contrasena,data[0].contrasena)) {
          let authUser = {
            "cedula": data[0].cedula,
            "nombre": data[0].nombre,
            "apellido": data[0].apellido,
            "direccion": data[0].direccion,
            "telefono": data[0].telefono,
            "correo": data[0].correo,
            "contrasena": data[0].contrasena,
            "imagen":data[0].imagen,
            "rol":data[0].tipoUsuario
          }
          console.log(authUser);
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.router.navigateByUrl("/dashboard");
        }else{
          console.log("Wrong credentials :(");         
          swal('Oops...', 'Correo/Contraseña incorrectos!', 'error');
        }
      }
    );
   
  }

}
