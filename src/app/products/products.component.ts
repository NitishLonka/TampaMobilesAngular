import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products:any
   data:any=[]
  constructor(private service:ProductsService ,private cservice:CommonService) {
    service.getPhones().subscribe(res=>{
      this.products=res.data
    })
   }

  ngOnInit(): void {
    this.cservice.data$.subscribe(res=>{
     
      this.data=res})
  }
  
  showProducts(){
    
  }
  newData(product:any){
    
    alert("Item added to cart successfully!!!")
    console.log(this.data)
  this.data.push(product)
    this.cservice.changeData(this.data)
  }
}
