import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardServiceService {

  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('jwt') !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
