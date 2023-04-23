import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./modules/home/pages/home-page/home-page.component";
import { NavbarPageComponent } from "./modules/navbar/pages/navbar-page/navbar-page.component";

const routes:Routes=[
    {
        path:"",
        component:NavbarPageComponent,
        loadChildren:()=> import(`../app/modules/navbar/navbar.module`).then(m=>m.NavbarModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}