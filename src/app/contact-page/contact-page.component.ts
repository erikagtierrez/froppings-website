import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.apiService.sendEmail(form.value.nombre,form.value.mensaje,form.value.email).subscribe(
      data => {
          let email = {
            "nombre": data.nombre,
            "correo": data.correo,
            "mensaje": data.mensaje
          }
          console.log(JSON.stringify(email));
      });
   
  }

}
