import { LoginServiceService } from './../../../service/login-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  isSignedIn: boolean;
  constructor(private router: Router, private loginService: LoginServiceService) {
    this.isSignedIn = loginService.isSignedIn();
    router.events.subscribe(() => {
        this.isSignedIn = loginService.isSignedIn();
    });
   }

  ngOnInit() {
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
