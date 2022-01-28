import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit,OnDestroy {
  public title: string ='Demo component';
  public counter: number=0;
  public selectedUser={id:0,name:'',background:'transparent'}
  public users=[
    {id:11,name:"Dr nice",background:"red"},
    {id:12,name:"Narco",background:"blue"},
    {id:13,name:"Bombasto",background:"yellow"},
    {id:14,name:"Celeritas",background:"green"},
    {id:15,name:"Magenta",background:"purple"},
    {id:16,name:"RubberMan",background:"gray"},
    {id:17,name:"Dynama",background:"orange"},
    {id:18,name:"Dr IQ",background:"red"},
    {id:19,name:"Magma",background:"red"},
    {id:20,name:"Tornado",background:"red"}
  ];

  constructor() {
    let div=document.getElementById("firsDiv");
    console.log('Contructor div value', div);
  }

  clickedEvent(){
    this.counter++;
  }

  ngOnInit(): void {
    console.log("component init");
    let div=document.getElementById('firsDiv');
    console.log('Contructor init value', div);
  }

  ngOnDestroy(): void {
    console.log("Component distroyed");
  }

  selectUser(user: any){
    this.selectedUser=user;
  }

  deleteUser(){
    this.users.pop();
  }

  addUser(){
    this.users.push({id:21,name:"Maria",background:"blue"});
  }

}
