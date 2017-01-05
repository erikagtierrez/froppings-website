import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
  providers:[ApiService]
})
export class PointsComponent implements OnInit {
    public puntos: number;
    public authUser;
  constructor(private router: Router, private apiService: ApiService) {
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.apiService.getUsuarioPuntos(form.value.email).subscribe(
      data => {
        console.log(data);
            this.authUser = {
            "puntos":data.puntos,
            "cedula": data.cedula,
            "nombre": data.nombre,
            "apellido": data.apellido,
            "direccion": data.direccion,
            "telefono": data.telefono,
            "correo": data.correo,
            "contrasena": data.contrasena
        };
        this.puntos=this.authUser.puntos;
    });
  }
}
