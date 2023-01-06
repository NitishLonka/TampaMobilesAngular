import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router,private service:ProductsService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('noauth'))
        {
            return next.handle(req.clone())
        }
        else{
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization","Bearer "+this.service.getToken())
            })
            return next.handle(clonedreq).pipe(
                  tap({
                    next:()=>{

                    },
                    error:()=>{
                            this.router.navigateByUrl('/login')
                    }
                  })
                )
            
        }
    }
}