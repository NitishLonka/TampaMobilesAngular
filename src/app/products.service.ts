import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  noauthHeader ={headers:new HttpHeaders({'NoAuth':'True'})}
  constructor(private http:HttpClient) { }
  
  getPhones(){
    return this.http.get<any>('/api/phones')
  }
  getPhone(id:Number){
    console.log(id);
    return this.http.get<any>(`/api/phones/${id}`)
  }
  getCartItems(userId:Number){
    return this.http.get<any>(`/api/cart/${userId}`)
  }
  addUser(data:any){
    console.log(data)
    return this.http.post<any>('/api/login',data)
  }
  userLogin(username:String,password:String){
    return this.http.get<any>(`api/login/user?username=${username}&password=${password}`)
  }

  addOrderDetails(data:any){
    return this.http.put<any>('api/login',data)
  }
  
  setToken(token: string){
   localStorage.setItem('token','true')
  }
  getToken(){
   return localStorage.getItem('token')
  }
  deleteToken(){
    localStorage.removeItem('token')
  }
  // isLoggedIn(){
  //   const helper = new JwtHelperService();
  //   var token = localStorage.getItem('token');
  //   if(token){
  //   const decodedToken = helper.decodeToken(token);
  //   if(decodedToken){
  //     return true;
  //   }
  //   }
  //   return false;
  // }

}
