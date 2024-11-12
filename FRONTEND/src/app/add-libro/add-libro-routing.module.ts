import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLibroPage } from './add-libro.page';

const routes: Routes = [
  {
    path: '',
    component: AddLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLibroPageRoutingModule {}
