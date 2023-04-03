import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CityComponent } from './pages/city/city.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { UsersComponent } from './pages/users/users.component';
import { GenderPipe } from './pipe/gender/gender.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    CityComponent,
    LoginComponent,
    CategoryComponent,
    ProductComponent,
    AddProductComponent,
    DeleteComponent,
    UsersComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    ReactiveFormsModule
  ]
})
export class AdminModule { }
