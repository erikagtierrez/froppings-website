import { ApiService } from './../api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { NgUploaderOptions } from 'ngx-uploader';
const bcrypt = require('bcryptjs');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ApiService]
})
export class ProfileComponent implements OnInit {
  public authUser;
  public image;
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  sizeLimit = 2000000;
  options: NgUploaderOptions;

  constructor(private router: Router, private apiService: ApiService) {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    if(this.authUser.imagen==='' || this.authUser.imagen === null){
      this.image="assets/img/productodefault.png";
    }else{
      this.image= 'https://www.erikagtierrez.hemael.com/upload/'+this.authUser.imagen;
    }
     this.options = {
      url:  'https://www.erikagtierrez.hemael.com/subirImagen/'+this.authUser.correo
      };
  }

  ngOnInit() {
  }

  saveProfile() {
    this.apiService.updateUser(this.authUser.cedula, this.authUser.nombre, this.authUser.apellido, this.authUser.direccion, this.authUser.telefono, this.authUser.correo, this.authUser.contrasena, this.authUser.rol).subscribe(
      data => {
        console.log(data);
        if (data.status == 'success') {
          this.router.navigateByUrl("/dashboard");
        } else {
          console.log("Error on sign up");
        }
      });
      this.apiService.getUsuarioEmail(this.authUser.correo).subscribe(
      data => {
          let newAuthUser = {
            "cedula": data[0].cedula,
            "nombre": data[0].nombre,
            "apellido": data[0].apellido,
            "direccion": data[0].direccion,
            "telefono": data[0].telefono,
            "correo": data[0].correo,
            "contrasena": data[0].contrasena,
            "imagen":data[0].imagen
          }
          localStorage.removeItem("authUser");
          localStorage.setItem("authUser", JSON.stringify(newAuthUser));
          this.router.navigateByUrl("/dashboard");
      }
      );
  }

  changePass(form: NgForm) {
    console.log(form.value.pass + "=" + this.authUser.contrasena)
    if (bcrypt.compareSync(form.value.pass, this.authUser.contrasena)) {
      let newPassword = bcrypt.hashSync(form.value.newPass, 10)
      this.apiService.updateUser(this.authUser.cedula, this.authUser.nombre, this.authUser.apellido, this.authUser.direccion, this.authUser.telefono, this.authUser.correo, newPassword,this.authUser.rol).subscribe(
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

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      console.log(data);
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

}
