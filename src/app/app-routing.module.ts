import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { routeguardGuard } from './routeguard.guard';
import { WishListComponent } from './wish-list/wish-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaysucpaymentSuccessfulComponent } from './paysucpayment-successful/paysucpayment-successful.component';
import { logInGuard } from './log-in.guard';

const routes: Routes = [
  {path:"home",canActivate:[routeguardGuard],component:HomeComponent,data: {animation: 'Home'}},
  {path:"cart",canActivate:[routeguardGuard],component:CartComponent,data: {animation: 'cart'}},
  {path:"wishList",canActivate:[routeguardGuard],component:WishListComponent,data: {animation: 'wishList'}},
  {path:"categories",canActivate:[routeguardGuard],component:CategoriesComponent,data: {animation: 'categories'}},
  {path:"brands",canActivate:[routeguardGuard],component:BrandsComponent, data:{animation: 'brands'}},
  {path:"chekout/:id",canActivate:[routeguardGuard],component:CheckOutComponent,data:{animation: 'chekout/:id'}},
  {path:"products/:id",canActivate:[routeguardGuard],component:ProductsComponent,data:{animation: '"products/:id'}},
  {path:"allorders",canActivate:[routeguardGuard],component:PaysucpaymentSuccessfulComponent,data:{animation: 'paymentSuccessful'}},
  {path:"logIn",canActivate:[logInGuard],component:LogInComponent,data:{animation: 'logIn'}},
  {path:"register",canActivate:[logInGuard],component:RegisterComponent,data:{animation: 'register'}},
  {path:"forgetPassword",canActivate:[logInGuard],component:ForgetPasswordComponent,data:{animation: 'forgetPassword'}},
  {path:"**",canActivate:[routeguardGuard],component:HomeComponent,data: {animation: 'Home'}},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
