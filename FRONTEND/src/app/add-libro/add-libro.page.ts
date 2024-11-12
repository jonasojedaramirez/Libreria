import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.page.html',
  styleUrls: ['./add-libro.page.scss'],
})
export class AddLibroPage implements OnInit {
  bookForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private libroService: LibroService,
    private route: Router) {
    this.bookForm = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      autor: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() { }

  createLibro() {
    if (this.bookForm.valid) {
      console.log('Formulario válido: ', this.bookForm.value);
      this.libroService.create(this.bookForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-libros");
      })

    } else {
      console.log('Formulario no válido ');
    }
  }

  getFormControl(field: string) {
    return this.bookForm.get(field);
  }
}
