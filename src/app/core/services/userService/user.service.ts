import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../data/interfaces/user";
import {environment} from "../../../../environments/environment";
import {config} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/Users`);
  }
  register(user: User) {
    return this.http.post(`${environment.apiUrl}/Users/create`, user);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/Users/${id}`);
  }
  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/Users/${id}`);
  }
}
