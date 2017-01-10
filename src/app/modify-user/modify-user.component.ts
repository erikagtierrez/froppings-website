import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  public authUser={
            "puntos": "",
            "cedula": "",
            "nombre": "",
            "apellido": "",
            "direccion": "",
            "telefono": "",
            "correo": "",
            "contrasena":"",
            "tipoUsuario":""
        };
  rol=["Cliente", "Administrador"];
  rolSelected: string;

  constructor(private router: Router, private apiService: ApiService) { }

  callRol(selected){
    console.log(selected);
    this.rolSelected=selected;
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.apiService.getUsuarioPuntos(form.value.email).subscribe(
      data => {
        console.log(data);
            this.authUser = {
            "puntos":data[0].puntos,
            "cedula": data[0].cedula,
            "nombre": data[0].nombre,
            "apellido": data[0].apellido,
            "direccion": data[0].direccion,
            "telefono": data[0].telefono,
            "correo": data[0].correo,
            "contrasena":data[0].contrasena,
            "tipoUsuario": data[0].tipoUsuario
        };
        this.rolSelected=this.authUser.tipoUsuario;
    });
  }

  modifyUser(){
    this.apiService.updateUser(this.authUser.cedula, this.authUser.nombre, this.authUser.apellido, this.authUser.direccion, this.authUser.telefono, this.authUser.correo,this.authUser.contrasena,this.rolSelected).subscribe(
      data => {
        console.log(data);
        if (data.status == 'success') {
        	this.router.navigateByUrl("/dashboard");
    }else{
        console.log("Error on sign up");
      }});
  }
}
