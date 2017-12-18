import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DashboardServiceService {
  private baseUrl = 'http://localhost:8080/api/admin';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private _http: Http) { }

  index() {
    return this._http.get(this.baseUrl + '/dashboard', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  newestOrders(page: Number) {
    return this._http.get(this.baseUrl + '/newestOrders?page=' + page, this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
}
