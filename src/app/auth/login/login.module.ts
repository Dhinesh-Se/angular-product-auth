import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule,LoginRouting],
})
export class LoginModule {}
