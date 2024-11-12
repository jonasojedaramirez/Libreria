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
     
  }

  ionViewDidEnter(){
    this.getAllLibros();
  }

   getAllLibros(){
     this.libroService.getLibros().subscribe(response => {
       this.libros = response;
     });
   }

   deleteLibro(id: any){
    this.libroService.delete(id).subscribe(response =>{
      this.getAllLibros();
    })
   }

}
