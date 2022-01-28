import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Produs} from "../../../data/interfaces/produs";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Page2serviceService {
  private readonly endpoint='Produs';

  private responseSubject =new BehaviorSubject<object>({});
  public response=this.responseSubject.asObservable();

  constructor(private readonly apiService:ApiService) { }
  getProdus(titlu:string):Observable<Produs>{//id
    // let titlu="Mouse Gaming";
    // this.httpClient.get<Produs>(`${this.apiUrl}/Produs/readByTitlu?titlu=${titlu}`).subscribe(data=>{
    //   this.produsFromApi1=data;
    // });
    return this.apiService.get<Produs>(this.endpoint+`/readByTitlu`,{titlu});
  }
  getProdus2(titlu:string):Observable<Produs>{//id
    return this.apiService.get<Produs>(this.endpoint+`/readByTitlu`,{titlu}).pipe(
      map(x=>{
        console.log('next');
        this.responseSubject.next(x);
        return x;
      })
    );
  }

}
