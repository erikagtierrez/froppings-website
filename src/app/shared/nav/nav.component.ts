import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent implements OnInit {
  authUser = localStorage.getItem("authUser");

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.authUser) this.authUser = JSON.parse(this.authUser);
  }

  cerrarsesion(){
    localStorage.removeItem("authUser");
    this.router.navigateByUrl("/home");
  }

}
