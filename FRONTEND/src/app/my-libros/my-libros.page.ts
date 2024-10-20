import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-libros',
  templateUrl: './my-libros.page.html',
  styleUrls: ['./my-libros.page.scss'],
})
export class MyLibrosPage implements OnInit {

  libros: any = [
    {
      id: 1,
      titulo: "El Señor de los Anillos",
      autor: "J.R.R.Tolkien"
    },{
      id: 2,
      titulo: "La Isla del Tesoro",
      autor: "Robert Stevenson"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
