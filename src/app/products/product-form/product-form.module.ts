import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormRouting } from './product-form.routing';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductFormRouting,
    FormsModule,
  ]
})
export class ProductFormModule { }
