import { Component, OnInit } from '@angular/core';
import {Page2serviceService} from "../../../core/services/page2services/page2service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  public title: string= 'Component 1'
  subscription: any;
  constructor(private readonly page2Service:Page2serviceService) {

  }

  ngOnInit(): void {
    this.subscription=this.page2Service.response.subscribe(data=> console.log('data from comp1',data))
  }

  unSubscribe(){
    this.subscription.unsubscribe();
  }

}
