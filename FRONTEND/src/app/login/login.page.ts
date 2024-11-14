import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Exit',
      url: '/salir',
      icon: 'exit'
    }
  ];

  token = 'adfrkerqerty ';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    localStorage.setItem('token', this.token);
    this.router.navigate(["/home"]);
  }

}
