import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  number:any
  totalamount=0
  @Input() data:any=[]
  constructor(private service:CommonService,public activatedRoute:ActivatedRoute,private pservice:ProductsService,private router:Router) { 

   
  }

  ngOnInit(): void {
   // this.service.data$.subscribe(res=>this.data=res)
    this.service.data$.subscribe(res=>{
     
      this.data=res
     this.totalamount=0; 
      
    for(let i=0;i<this.data.length;i++)
    {
      this.totalamount+=this.data[i].price
    } 
    })
  }
   changequantity(id:any,num:number){
    this.data[id].price+=(this.data[id].price/this.data[id].quantity)*num;
    this.data[id].quantity+=num;
    
    if(this.data[id].quantity===0)
    {
      this.data[id].price===0
    }
    this.totalamount=0;
    for(let i=0;i<this.data.length;i++)
    {
      this.totalamount+=this.data[i].price
    }
    console.log(this.data)
   }
   delete(id:number)
   {
    console.log(id);
    this.data = this.data.filter((obj: { id: number; })=>obj.id!==id)
    console.log(this.data)
    this.service.changeData(this.data)
   }
   continue(){
    if(this.pservice.getToken()==='true'){
     this.router.navigateByUrl('/paymentsuccess');
    }
    else
    {
      this.router.navigateByUrl('/login');
    }
   }
}
