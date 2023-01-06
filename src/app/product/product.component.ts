import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() productAdded = new EventEmitter();
  @Input() product:any
  dat:any=[]
  constructor(route:ActivatedRoute,service:ProductsService,private cservice:CommonService) {
    const id = Number(route.snapshot.paramMap.get('id'));
    service.getPhone(id).subscribe(res=>{
      console.log(res.data)
      this.product=res.data
    })
   
   }
   addProductToCart(product: any){
    console.log("here")
    this.productAdded.emit(product)
   }
  ngOnInit(): void {
    //this.cservice.data$.subscribe(res=>this.data.push(res))
  }
  newData(product:any){
    this.cservice.changeData(product)
  }
}

