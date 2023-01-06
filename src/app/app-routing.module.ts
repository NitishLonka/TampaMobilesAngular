import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AuthGuard } from './auth/auth.guard';
const routes : Routes = [
  {path:'products',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'account',component:AccountComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'payment',component:PaymentsuccessComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
