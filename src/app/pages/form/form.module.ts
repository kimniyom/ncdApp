import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule, } from '@ionic/angular';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { FormPage } from './form.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SelectSearchableModule,
    IonicSelectableModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
