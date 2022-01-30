import { Component, OnInit } from '@angular/core';
import {Page2serviceService} from "../../../core/services/page2services/page2service.service";
import {ModalService} from "../../../core/services/modalService/modal.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  public title: string= 'Component 2'
  constructor(private readonly page2Service:Page2serviceService) {

  }

  ngOnInit(): void {
    this.page2Service.response.subscribe(data=> console.log('data from comp1',data))
  }

}
