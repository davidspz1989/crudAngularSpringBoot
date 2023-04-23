import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdatePageComponent } from './pages/update-page/update-page.component';


@NgModule({
  declarations: [
    UpdatePageComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule
  ]
})
export class UpdateModule { }
