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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
