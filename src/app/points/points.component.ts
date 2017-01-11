import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'          

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
  providers:[ApiService]
})
export class PointsComponent implements OnInit {
    public puntos: number;
    public authUser;
    public user;

  constructor(private router: Router, private apiService: ApiService) {
   }

  ngOnInit() {
    this.authUser  = JSON.parse(localStorage.getItem("authUser"));
  }

  onSubmit(form: NgForm){
    this.apiService.getUsuarioPuntos(form.value.email).subscribe(
      data => {
        if(data != 0){
        console.log(data);
            this.user = {
            "puntos":data[0].puntos,
            "cedula": data[0].cedula,
            "nombre": data[0].nombre,
            "apellido": data[0].apellido,
            "direccion": data[0].direccion,
            "telefono": data[0].telefono,
            "correo": data[0].correo,
            "contrasena": data[0].contrasena,
            "rol":data[0].tipoUsuario
        };
        this.puntos=this.authUser.puntos;
      }else{
          swal('Oops...', 'Correo incorrecto!', 'error');
      }
    });
  }
}
