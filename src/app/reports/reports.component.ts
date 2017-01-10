import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers:[ApiService]
})
export class ReportsComponent implements OnInit {
  public usuario: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsuarios().subscribe(
      data => {
        this.usuario=data;
        console.log(this.usuario);
        console.log(this.usuario[0].nombre);
      }
    )
  }

}
