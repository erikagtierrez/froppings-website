import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import swal from 'sweetalert2';        

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.apiService.deleteUser(form.value.email).subscribe(
      data => {
        console.log(data);
        if (data.status == 'success') {
        	this.router.navigateByUrl("/dashboard");
        }else{
            console.log("Error on sign up");
            swal('Oops...', 'Correo incorrecto!', 'error');
          }});
  }

}
