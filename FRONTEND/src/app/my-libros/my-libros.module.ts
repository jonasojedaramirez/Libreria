import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLibrosPageRoutingModule } from './my-libros-routing.module';

import { MyLibrosPage } from './my-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    MyLibrosPageRoutingModule
  ],
  declarations: [MyLibrosPage]
})
export class MyLibrosPageModule {}
