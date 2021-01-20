import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn : boolean = false;
  title = 'router-example';

  constructor(private authService : AuthenticationService) {

  } 

  checkIsLoggedIn() : void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
