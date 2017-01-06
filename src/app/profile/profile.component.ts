import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
const bcrypt = require('bcryptjs');


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ApiService]
})
export class ProfileComponent implements OnInit {
  public authUser;

  constructor(private router: Router, private apiService: ApiService) {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
  }

  ngOnInit() {
  }

  saveProfile() {
    this.apiService.updateUser(this.authUser.cedula, this.authUser.nombre, this.authUser.apellido, this.authUser.direccion, this.authUser.telefono, this.authUser.correo, this.authUser.contrasena).subscribe(
      data => {
        console.log(data);
        if (data.status == 'success') {
          this.router.navigateByUrl("/dashboard");
        } else {
          console.log("Error on sign up");
        }
      });
  }

  changePass(form: NgForm) {
    console.log(form.value.pass+"="+this.authUser.contrasena)
    if(bcrypt.compareSync(form.value.pass,this.authUser.contrasena)){
    this.apiService.updateUser(this.authUser.cedula, this.authUser.nombre, this.authUser.apellido, this.authUser.direccion, this.authUser.telefono, this.authUser.correo, form.value.newPass).subscribe(
      data => {
        console.log(data);
        if (data.status == 'success') {
          this.router.navigateByUrl("/dashboard");
        } else {
          console.log("Error on sign up");
        }
      });
  }
}

}
