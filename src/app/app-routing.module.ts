import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

import { DashBoardRouting } from './products/dashboard/dashboard.routing';
import { ProductFormRouting } from './products/product-form/product-form.routing';
import { ProductListRouting } from './products/product-list/product-list.routing';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => ProductListRouting,
      },
      {
        path: 'new',
        loadChildren: () => ProductFormRouting,
      },
      {
        path: ':id',
        loadChildren: () => ProductFormRouting,
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => DashBoardRouting,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
