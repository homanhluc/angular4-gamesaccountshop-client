import { Router } from '@angular/router';
import { LoginServiceService } from './../../../service/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private _loginService: LoginServiceService,
              private router: Router) { }
  data: any = [];
  ngOnInit() {
  }
  login(event, email, password) {
    event.preventDefault();
    this._loginService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/admin']);
      }, this.handleError);
      console.log(email + password);
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }


  handleError(error) {
    console.log(error.status);
  }

}
