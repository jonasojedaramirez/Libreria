import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2) ]],
      autor: ['', [Validators.required, Validators.minLength]]
    });

  }


onSubmit(){
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}