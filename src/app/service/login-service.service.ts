import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class LoginServiceService {
  private baseUrl = 'http://localhost:8080/login';
  private headers = new Headers({'enctype': 'multipart/form-data' });
  private options = new RequestOptions({headers: this.headers});
  constructor(private _http: Http) { }
  login(email, password): Observable<Response> {
    const formdata: FormData = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    return this._http.post(this.baseUrl, formdata, this.options)
                    .do(resp => {
                        localStorage.setItem('jwt', resp.headers.get('Authorization'));
                    });
}

logout(): void {
    localStorage.removeItem('jwt');
}

private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}


 isSignedIn(): boolean {
    return localStorage.getItem('jwt') !== null;
}
}
