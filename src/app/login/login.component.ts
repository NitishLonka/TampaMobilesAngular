import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:any={}
    serv_:any
    message1:any
    orders:any=[]
  constructor(private service:ProductsService,private router:Router,private cservice:CommonService) { 

  }

  ngOnInit(): void {
    this.cservice.data$.subscribe(res=>{
      this.orders=res})
      let date = new Date(Date.now());
      let rndnum = 'R'+Math.floor(Math.random()*(999999-100000)+100000);
      this.orders = this.orders.map((order: any)=>{order.date = date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear();order.number = rndnum; return order} )
      console.log(this.orders)
  }
  
  register(user:any){
    user.cart=[];
   
    user.orders=this.orders;
    console.log(user.orders);
    this.service.addUser(user).subscribe(res=>{console.log("here",res);
    if(res.success===false&&res.msg){this.message1=res.msg}
    else{
      this.service.setToken('true')
      this.router.navigate(['/payment'])
    }});
  }

  userLogin(){
    this.user.orders=this.orders
    console.log(this.user.username1,this.user.password1)
    this.service.userLogin(this.user.username1,this.user.password1).subscribe(res=>{
     if(res.success==true)
     {
      this.service.setToken('true')
      this.service.addOrderDetails(this.user).subscribe(resp=>{
        if(resp.success==true)
        {
          this.router.navigate(['/payment'])
        }
      })
      
     }
  });
    this.router.navigate(['/payment'])
  }
}
