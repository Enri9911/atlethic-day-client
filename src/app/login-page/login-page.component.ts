import { Component, OnInit } from '@angular/core';
import { LoginProvider } from 'src/providers/login-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public username;
  public password;

  constructor(private loginProvider: LoginProvider, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    if(this.loginProvider.login(this.username, this.password)){
      alert("PORCO DIO SONO LOGGATOOOOOOOO");
      this.router.navigate(['/teachers']);
    }
  }
}
