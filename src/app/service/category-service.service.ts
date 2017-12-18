import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryServiceService {
  private baseUrl = 'http://localhost:8080/api/admin';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  data: any;
  constructor(private _http: Http) { }

  index() {
    return this._http.get(this.baseUrl + '/category', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  edit(id, data) {
    return this._http.put(this.baseUrl + '/category/' + id + '/edit', JSON.stringify(data), this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  save(data) {
    return this._http.post(this.baseUrl + '/category/save', JSON.stringify(data), this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  delete(id) {
    return this._http.delete(this.baseUrl + '/category/' + id + '/delete', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  findOne(id) {
    return this._http.get(this.baseUrl + '/category/' + id + '/find', this.options)
                .map((res: Response) => res.json())
                .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter(data) {
    this.data = data;
  }
  getter() {
    return this.data;
  }
}
