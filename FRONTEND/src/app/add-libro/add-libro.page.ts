import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../services/libro.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.page.html',
  styleUrls: ['./add-libro.page.scss'],
})
export class AddLibroPage implements OnInit {
  bookForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private libroService: LibroService,
    private photoService: PhotoService,
    private router: Router) {
    this.bookForm = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      autor: ['', Validators.compose([Validators.required])]
    })
  }

  ionViewWillEnter() {
    this.bookForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }
  ngOnInit() { }

  createLibro() {
    if (this.bookForm.valid) {
      console.log('Formulario válido: ', this.bookForm.value);
      this.libroService.create(this.bookForm.value, Blob).subscribe(response => {
        this.router.navigateByUrl("/my-libros");
      })

    } else {
      console.log('Formulario no válido ');
    }
  }

  getFormControl(field: string) {
    return this.bookForm.get(field);
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : "";
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = "";
  }
  async submitForm() {
    // DECOMMENT:
    this.isSubmitted = true;
    if (!this.bookForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.libroService.create(this.bookForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/my-libros");
      })
    }
  }



}
