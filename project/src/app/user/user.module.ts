import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    MyProfileComponent,
    DeleteComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
