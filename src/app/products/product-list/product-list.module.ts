import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRouting } from './product-list.routing';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductListRouting],
})
export class ProductListModule {}
