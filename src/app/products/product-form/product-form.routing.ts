import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductFormComponent } from "./product-form.component";

const routes:Routes=[{
    path:'',
    component:ProductFormComponent,
    children:[
      {path:'products/new',component:ProductFormComponent},
      {path:'products/:id',component:ProductFormComponent}

  ],
},
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],

})
export class ProductFormRouting{}