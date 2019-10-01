import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormulaobesityPage } from './formulaobesity.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaobesityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormulaobesityPage]
})
export class FormulaobesityPageModule {}
