import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
const bcrypt = require('bcryptjs');
import swal from 'sweetalert2'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (localStorage.getItem("authUser")) this.router.navigateByUrl("/home");
  }

  registrarUsuario(form: NgForm) {
    let encryptedPass= bcrypt.hashSync(form.value.contrasena,10)
    this.apiService.createUser(form.value.cedula, form.value.nombre, form.value.apellido, form.value.direccion, form.value.telefono, form.value.email, encryptedPass,"Cliente").subscribe(
      data => {
        if (data.status == 'success') {
          let authUser = {
        		"cedula": form.value.cedula,
            "nombre": form.value.nombre,
            "apellido":form.value.apellido,
            "direccion": form.value.direccion,
            "telefono": form.value.telefono,
            "correo": form.value.correo,
            "contrasena": encryptedPass,
            "rol": "Cliente",
            "puntos":100
        	}
        	localStorage.setItem("authUser", JSON.stringify(authUser));
        	this.router.navigateByUrl("/dashboard");
      }else{
        console.log("Error on sign up");
        swal('Oops...', 'Se ha producido un error en el registro!', 'error');
      }});
  }
  
}
