import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../../data/interfaces/student";
import {environment} from "../../../environments/environment";
import {Produs} from "../../data/interfaces/produs";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  title='Page 1';
  public produsFromApi1:Produs={id:"",titlu:"",descriere:"",imagine:"",pret:0}
  public produsFromApiQuerry:Produs={id:"",titlu:"",descriere:"",imagine:"",pret:0}
  public produsFromApiHeader:Produs={id:"",titlu:"",descriere:"",imagine:"",pret:0}

  public produsul:any;

  private readonly apiUrl=environment.apiUrl;

  constructor(private readonly httpClient:HttpClient) {

  }

  ngOnInit(): void {
    // from route
    let titlu="Mouse Gaming";
    this.httpClient.get<Produs>(`${this.apiUrl}/Produs/readByTitlu?titlu=${titlu}`).subscribe(data=>{
      this.produsFromApi1=data;
    });
    // querry params
    let params={Title:"Mouse Gaming"};
    this.httpClient.get<Produs>(`${this.apiUrl}/Produs/fromQuery?titlu=${titlu}`).subscribe(data=>{
      this.produsFromApiQuerry=data;
    });
    // from header
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'titlu':'Mouse Gaming'
    })
    this.httpClient.get<Produs>(`${this.apiUrl}/Produs/fromHeader`,{headers}).subscribe(data=>{
      this.produsFromApiHeader=data;
    console.log(this.produsFromApi1.titlu)
    });
    //form data
    const formData=new FormData();
    formData.append('titlu','produs');
    formData.append('descriere','descriere produs');
    formData.append('imagine','www.poza.com');
    formData.append('pret','0');
    formData.append('categorieId','');

    this.httpClient.post<Produs>(`${this.apiUrl}/Produs/CreateFromForm`,formData).subscribe(data=>{
      this.produsul=data;
    });

    // body
    let newProdus={
      titlu:"Tastatura",
      descriere:"Tastatura smechera de gaming",
      imagine:"www.pozebune.com",
      pret:150
    }
    //n-am implementat in backend frombody
    this.httpClient.post<Produs>(`${this.apiUrl}/Produs/fromBody`,newProdus).subscribe(data=>{
      this.produsul=data;
    });

    // patch
    let patchObject=[
      {
        'op':'replace',
        'path':'titlu',
        'value':'super tastatura'
      }
    ];
    let userIdForPatch=1;
    this.httpClient.patch<Produs>(`${this.apiUrl}/Prod us/patch/${userIdForPatch}`,patchObject).subscribe((data:Produs)=>{
      this.produsul=data;
    });

  }
}
