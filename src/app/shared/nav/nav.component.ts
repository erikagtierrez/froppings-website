import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent implements OnInit {
  public authUser;

  constructor(private router: Router) {
   this.authUser = localStorage.getItem("authUser");
    
   }

  ngOnInit() {
    if (this.authUser) this.authUser = JSON.parse(this.authUser);
  }

  cerrarsesion(){
    localStorage.removeItem("authUser");
    this.router.navigateByUrl("/login");
  }

}
