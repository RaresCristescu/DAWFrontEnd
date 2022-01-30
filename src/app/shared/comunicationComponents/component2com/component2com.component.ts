import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../../core/services/communication.service";

@Component({
  selector: 'app-component2com',
  templateUrl: './component2com.component.html',
  styleUrls: ['./component2com.component.scss']
})
export class Component2comComponent implements OnInit {
  title='component2';
  constructor(private readonly communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.getTitleObservable().subscribe(data=>console.log('comp 2',data));
  }

  titleCHanged(){
    this.communicationService.titleChanged("new title comp2");
  }
}
