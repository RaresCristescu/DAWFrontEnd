import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appImagePreloader]',
  host:{
    '[attr.src]':'finalImage'
  }
})
export class ImagePreloaderDirective implements OnInit{

  @Input('appImagePreloader') targetSource:string="";
  defaultImage: string='https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif'
  finalImage: any;
  downloadImage:any;

  constructor() { }

  ngOnInit(): void {
    this.finalImage=this.finalImage;
    this.downloadImage=new Image();
    this.downloadImage.src=this.targetSource;

    this.downloadImage.onload=()=>{
      this.finalImage=this.targetSource
    }
    this.downloadImage.onerror=(e:any)=>{
      console.error(e);
    }
  }

}
