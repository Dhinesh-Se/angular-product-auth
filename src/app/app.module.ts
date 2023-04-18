import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginRouting } from './auth/login/login.routing';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    LoginRouting,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
