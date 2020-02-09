import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public location: Location) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  back(){
    console.log(this.router.navigated)
    console.log("GO BACK");
    this.location.back();
  }

}
