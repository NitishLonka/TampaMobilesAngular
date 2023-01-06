import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject([])
  data$ = this.data.asObservable();
  
  changeData(dat:any){
    this.data.next(dat);
  }
  constructor() { }
}
