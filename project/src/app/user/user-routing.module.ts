import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { BackdoorGuard } from './gaurds/backdoor/backdoor.guard';
import { AntiBackdoorGuard } from './gaurds/anti-backdoor/anti-backdoor.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [

  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent,
        canActivate: [AntiBackdoorGuard]
      },
      {
        path: "signup",
        component: SignupComponent,
        canActivate: [AntiBackdoorGuard]
      },
      {
        path: "category",
        component: CategoryComponent
      },
      {
        path: "my-profile",
        component: MyProfileComponent,
        canActivate: [BackdoorGuard]
      },
      {
        path: "add-product",
        component: AddProductComponent,
        canActivate: [BackdoorGuard]
      },
      {
        path: "product-list",
        component: ProductComponent,
        canActivate: [BackdoorGuard]
      },
      {
        path: "product/edit/:id",
        component: AddProductComponent,
        canActivate: [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
