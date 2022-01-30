import { Component, OnInit } from '@angular/core';
import {CommunicationService} from "../../../core/services/communication.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  parentTitleChange($event:any){
    console.log("value changed",$event)
  }
}
