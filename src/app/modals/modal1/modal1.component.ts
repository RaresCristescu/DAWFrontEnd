import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit {
  @Input() params:any;
  @Output() closed=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.closed.emit({success:false})
  }
}
