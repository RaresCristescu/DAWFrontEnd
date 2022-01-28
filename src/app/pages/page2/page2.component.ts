import { Component, OnInit } from '@angular/core';
import {Page2serviceService} from "../../core/services/page2services/page2service.service";
import {Produs} from "../../data/interfaces/produs";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  title='Page 2';
  public produsFromApi1:Produs={id:"",titlu:"",descriere:"",imagine:"",pret:0}
  constructor(private readonly page2Service:Page2serviceService) { }

  ngOnInit(): void {
    this.page2Service.getProdus("Frigider").subscribe(data=>this.produsFromApi1=data)
  }
  getProduse2(){
    this.page2Service.getProdus2("Frigider").subscribe(data=>this.produsFromApi1=data)
  }

}
