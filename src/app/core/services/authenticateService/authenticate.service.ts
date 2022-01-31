import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, map, Observable, ReplaySubject} from "rxjs";
// import { User } from '../models/user';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../data/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  baseUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
  // private currentUserSource = new ReplaySubject<User>(1);
  // currentUser$ = this.currentUserSource.asObservable();
  //
  // constructor(private http: HttpClient) { }
  //
  // login(model: any) {
  //   return this.http.post(this.baseUrl + 'account/login', model).pipe(
  //     map((response: User) => {
  //       const user = response;
  //       if (user) {
  //         this.setCurrentUser(user);
  //       }
  //     })
  //   )
  // }
  //
  // register(model: any) {
  //   return this.http.post(this.baseUrl + 'account/register', model).pipe(
  //     map((user: User) => {
  //       if (user) {
  //         this.setCurrentUser(user);
  //       }
  //     })
  //   )
  // }
  //
  // setCurrentUser(user: User) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.currentUserSource.next(user);
  // }
  //
  // logout() {
  //   localStorage.removeItem('user');
  //   this.currentUserSource.next(null);
  // }

}
