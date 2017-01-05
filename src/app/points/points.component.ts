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
            "puntos":data[0].puntos,
            "cedula": data[0].cedula,
            "nombre": data[0].nombre,
            "apellido": data[0].apellido,
            "direccion": data[0].direccion,
            "telefono": data[0].telefono,
            "correo": data[0].correo,
            "contrasena": data[0].contrasena
        };
        this.puntos=this.authUser.puntos;
    });
  }
}
