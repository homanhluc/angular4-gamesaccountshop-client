import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductServiceService {
  private baseUrl = 'http://localhost:8080/api/admin/product';
  private headers = new Headers({ 'enctype': 'multipart/form-data' });
  private options = new RequestOptions({ headers: this.headers });
  private headersImage = new Headers({ 'Content-Type': 'image/jpeg' });
  private optionsImage = new RequestOptions({ headers: this.headersImage });
  constructor(private _http: Http) { }
  index() {
    return this._http.get(this.baseUrl, this.options)
      .map(this.extractJson)
      .catch(this.errorHandler);
  }
  save(data) {
    return this._http.post(this.baseUrl + '/save', JSON.stringify(data), this.options)
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  delete(id) {
    return this._http.delete(this.baseUrl + '/' + id + '/delete')
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  getUpload(id) {
    return this._http.get(this.baseUrl + '/' + id + '/upload', this.options)
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  postUpload(id, image: File) {
    const formdata: FormData = new FormData();
    formdata.append('image', image);
    return this._http.post(this.baseUrl + '/' + id + '/upload', formdata, this.options)
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  // this is my service get API from server ()
  getImage(name): string {
    return this.baseUrl + '/' + 'image?name=' + name;
  }
  // getImage(name): Observable<File> {
  //   return this._http.get(this.baseUrl + '/' + 'image?name=' + name, this.optionsImage)
  //     .map((res: Response) => res.url)
  //     .catch(this.errorHandler);
  // }
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
  extractJson(res: Response): string {
    return res.json();
  }
}
