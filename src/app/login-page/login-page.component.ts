import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
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
        if (form.value.contrasena === data.contrasena) {
          let authUser = {
            "cedula": data.cedula,
            "nombre": data.nombre,
            "apellido": data.apellido,
            "direccion": data.direccion,
            "telefono": data.telefono,
            "correo": data.correo,
            "contrasena": data.contrasena
          }
          // console.log(authUser);
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.router.navigateByUrl("/home");
        }
        else
          console.log("Wrong credentials :(");
      }
    );
   
  }

}
