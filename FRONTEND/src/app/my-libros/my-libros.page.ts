import { Component, OnInit } from '@angular/core';

import { LibroService } from '../services/libro.service';


@Component({
  selector: 'app-my-libros',
  templateUrl: './my-libros.page.html',
  styleUrls: ['./my-libros.page.scss'],
})
export class MyLibrosPage implements OnInit {

  libros: any = [];

    

  constructor(
  private libroService: LibroService
    ) { }

  ngOnInit(){
     this.getAllLibros();
  }

   getAllLibros(){
     this.libroService.getLibros().subscribe(response => {
       this.libros = response;
     });
   }

}
