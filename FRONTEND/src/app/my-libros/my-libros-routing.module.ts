import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLibrosPage } from './my-libros.page';

const routes: Routes = [
  {
    path: '',
    component: MyLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLibrosPageRoutingModule {}
