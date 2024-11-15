import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
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
  ) {}
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(){
    localStorage.setItem('token', this.token);
    this.router.navigate(["/home"]);
  }
}
