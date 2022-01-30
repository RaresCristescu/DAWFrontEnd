import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalService} from "../../core/services/modalService/modal.service";

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  public modals:any={};
  private modalType='';

  constructor(private router:Router, private modalService: ModalService) {
    router.events.subscribe(()=>{
      if(this.modalType!=''){
        this.modalService.close();
        this.removeBodyModalClass();
      }
    })
  }

  ngOnInit(): void {
    const availableModals=this.modalService.getAvailableModals();
    availableModals.forEach(modal=>{
      // @ts-ignore
      this.modals[modal]={
        opened:false,
        params:{}
      }
    });

    //subscribe to open events
    this.modalService.openModal.subscribe((modal:any)=>{
      // @ts-ignore
      let localModal= this.modals[modal.type];
      localModal.opened=modal.opened;
      localModal.params=modal.params;
      if(modal.opened==true){
        this.modalType=modal.type;
        document.body.classList.add('modal-opened');
      }
    });

  }
  private removeBodyModalClass(){
    document.body.classList.remove('modal-opened');
  }

  public onClose(type:string,$event:any){
    this.removeBodyModalClass();
    this.modalService.close(type,$event);
  }
}
