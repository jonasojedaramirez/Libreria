import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo: string = "El Señor de los Anillos";
  autor: string = "J.R.R.Tolkien";

  constructor(private router: Router) {}

  gotoMyLibros(){
    this.router.navigateByUrl("/my-libros");
  }
  

}
