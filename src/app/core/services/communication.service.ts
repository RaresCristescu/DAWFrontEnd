import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private titleObserver=new BehaviorSubject<string>("");

  constructor() { }

  titleChanged(value:string){
    this.titleObserver.next(value);
  }

  getTitleObservable(){
    return this.titleObserver.asObservable();
  }
}
