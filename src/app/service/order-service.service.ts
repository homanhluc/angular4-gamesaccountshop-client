import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrderServiceService {
  private baseUrl = 'http://localhost:8080/api/admin/order';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private _http: Http) { }
  index() {
    return this._http.get(this.baseUrl, this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  show(id) {
    return this._http.get(this.baseUrl + '/' + id, this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  delete(id) {
    return this._http.delete(this.baseUrl + '/' + id + '/delete', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
}
