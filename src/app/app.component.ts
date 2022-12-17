import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/session/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-exam-project';

  constructor(private http: HttpClient, private authService: AuthService) {


    if (!getSession()) {
      this.authService.setLoginInfo(null, false)
      return
    }
    this.authService.setLoginInfo(getSession(), true)

}
}
