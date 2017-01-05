import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
const bcrypt = require('bcryptjs');

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let encryptedPass= bcrypt.hashSync("123456",10)
    this.apiService.createUser(form.value.cedula, form.value.nombre, form.value.apellido, form.value.direccion, form.value.telefono, form.value.correo, encryptedPass).subscribe(
      data => {
        if (data.status == 'success') {
          let authUser = {
        		"cedula": form.value.cedula,
            "nombre": form.value.nombre,
            "apellido":form.value.apellido,
            "direccion": form.value.direccion,
            "telefono": form.value.telefono,
            "correo": form.value.correo,
            "contrasena": encryptedPass
        	}
          console.log(data.status)
        	this.router.navigateByUrl("/dashboard");
      }else{
        console.log("Error on sign up");
      }});
  }

}
