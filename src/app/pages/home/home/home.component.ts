import { Component, OnInit } from '@angular/core';
import {User} from "../../../data/interfaces/user";
import {UserService} from "../../../core/services/userService/user.service";
import {first} from "rxjs";
import {AuthenticateService} from "../../../core/services/authenticateService/authenticate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;
  users : User[];

  constructor(private userService: UserService,private authenticationService: AuthenticateService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.Id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }
  deleteUser(id: string) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
