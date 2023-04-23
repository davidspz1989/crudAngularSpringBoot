import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'listado',
    loadChildren:()=>import(`../list/list.module`).then(m=>m.ListModule)
  },
  {
    path:'crear',
    loadChildren:()=>import(`../create/create.module`).then(m=>m.CreateModule)
  },
  {
    path:"actualizar/:id",
    loadChildren:()=>import(`../update/update.module`).then(m=>m.UpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
