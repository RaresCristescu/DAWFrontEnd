import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../../core/services/communication.service";
import {ModalService} from "../../../core/services/modalService/modal.service";

@Component({
  selector: 'app-component1com',
  templateUrl: './component1com.component.html',
  styleUrls: ['./component1com.component.scss']
})
export class Component1comComponent implements OnInit {
  title='component1';
  constructor(private readonly communicationService: CommunicationService,private readonly modalService:ModalService) { }

  ngOnInit(): void {
    this.communicationService.getTitleObservable().subscribe(data=>console.log('comp 1',data));
  }

  titleCHanged(){
    this.modalService.open('modal1',this.title);
    this.communicationService.titleChanged("new title comp1");
  }

}
