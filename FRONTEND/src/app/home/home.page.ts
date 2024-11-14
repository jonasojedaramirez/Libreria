import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  token = localStorage.getItem("token");

  constructor(private router: Router) { }

  gotoMyLibros() {
    this.router.navigateByUrl("/my-libros");
  }
  gotoAddBook() {
    this.router.navigateByUrl("/add-libro");
  }

}
