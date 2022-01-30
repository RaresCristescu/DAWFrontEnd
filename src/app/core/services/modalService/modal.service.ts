import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, EMPTY, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public openModal=new EventEmitter<any>();
  public modalActions=new BehaviorSubject<any>({});
  public closeActions={};

  private readonly modalsAvailable=['modal1'];
  constructor() {
    // @ts-ignore
    this.modalsAvailable.forEach((modalType)=>this.closeActions[modalType]=new BehaviorSubject<any>({}))
  }

  public open(type:string,params={}):Observable<any>{
    if(this.modalsAvailable.indexOf(type)==-1){
      console.error(type,'is not a known modal instance!');
      return EMPTY;
    }
    this.openModal.emit({
      opened:true,
      type,
      params:params? params:{}
    });
    // @ts-ignore
    this.closeActions[type].next({});
    // @ts-ignore
    return this.closeActions[type].asObservable();
  }

  public close(type:string="",params={}){
    if(this.modalsAvailable.indexOf(type)==-1){
      console.error(type,'is not a known modal instance!');
      return;
    }
    this.openModal.emit({
      opened:false,
      type,
      params:{}
    });
    // @ts-ignore
    this.closeActions[type].next(params);
  }

  public getAvailableModals(){
    return this.modalsAvailable;
  }
}
