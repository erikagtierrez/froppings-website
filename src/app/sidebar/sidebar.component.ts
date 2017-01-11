import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  authUser = JSON.parse(localStorage.getItem("authUser"));

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cerrarsesion(){
    localStorage.removeItem("authUser");
    this.router.navigateByUrl("/home");
  }
}
