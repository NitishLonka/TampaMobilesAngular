import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLogin:boolean=false;
  isPersonalInformation:boolean=true;
  isOrderHistory:boolean=false;
  isDisabled:boolean=false;
  user:any={};
  userId:any;
  orders:any=[];
  message1:any;
  constructor(private service:ProductsService,private cservice:CommonService,private router:Router) {
       if(this.service.getToken()==='true')
       {
         this.isLogin=true;
       }
       else{
        this.isLogin=false;
       }
   }
   
  ngOnInit(): void {
  }
  negate(flag:boolean)
  {
    this.isPersonalInformation=!flag;
  }
  setFlag(flag:boolean){
    this.isDisabled=flag
    console.log(this.isDisabled)
  }
  registerDetails(){
    this.service.addUser(this.user).subscribe(res=>{
    if(res.success==true){
      console.log("here--",res
      )
      this.user=res.data
      this.isLogin=true
      this.service.setToken('true')
    }
   })
  }
  userLoginDetails(){
    this.service.userLogin(this.user.username1,this.user.password1).subscribe(res=>{
      if(res.success==true)
      {
        console.log("mams")
       this.user=res.data;
       console.log(this.user)
      this.isLogin=true
      const groups = res.data.orders.reduce((groups:any, item:any) => {
        const group = (groups[item.group] || []);
        group.push(item);
        groups[item.number] = group;
        return groups;
      }, {});
      
      console.log(groups);
      this.orders=res.data.orders;
      this.service.setToken('true')
    }
   },
   err=>{
    this.message1 = err.error.message;
    
   }); 
  }
  onLogout(){
    this.service.deleteToken();
    this.router.navigateByUrl('/home')
  }
}
