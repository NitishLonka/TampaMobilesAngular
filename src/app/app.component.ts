import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'test';
  isLogin:boolean=false
  cartProductList :any=[]
  constructor(private service:ProductsService){
  
  }
  
  ngOnInit(){
    this.getdataFromApi()
  }
  getdataFromApi(){
    this.service.getPhones().subscribe((res)=>
    {
       console.log("response:",res)
    })
    }
  addProductToCart(product:any){
    this.cartProductList.push(product)
    console.log(this.cartProductList);
  }
  }

