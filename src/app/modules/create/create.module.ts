import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule // SE DEBE DE IMPORTAR EN EL MODULE QUE SE USE FORMS
  ]
})
export class CreateModule { }
