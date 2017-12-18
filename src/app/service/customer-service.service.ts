import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerServiceService {

  private baseUrl = 'http://localhost:8080/api/admin/customer';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private _http: Http) { }

  index() {
    return this._http.get(this.baseUrl, this.options)
                .map((response: Response) => response.json())
                .catch(this.errorHandler);
  }

  showOrders(id: Number) {
    return this._http.get(this.baseUrl + '/' + id + '/orders', this.options)
                .map((response: Response) => response.json())
                .catch(this.errorHandler);
  }

  delete(id: Number) {
    return this._http.delete(this.baseUrl + '/' + id + '/delete', this.options)
                .map((response: Response) => response.json())
                .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
}
