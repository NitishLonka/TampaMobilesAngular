import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProductsService } from './products.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    AccountComponent,
    LoginComponent,
    PaymentsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},AuthGuard,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
