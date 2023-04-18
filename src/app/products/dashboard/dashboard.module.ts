import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dashboard.routing';
import { ProductFormComponent } from '../product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRouting,
  ],
  declarations: [DashboardComponent,ProductFormComponent]
})
export class DashboardModule { }