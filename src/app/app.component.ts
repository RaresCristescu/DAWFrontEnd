import { Component } from '@angular/core';
import {User} from "./data/interfaces/user";
import {Router} from "@angular/router";
import {AuthenticateService} from "./core/services/authenticateService/authenticate.service";
import {Role} from "./data/interfaces/role";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticateService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
