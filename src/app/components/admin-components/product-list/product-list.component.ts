import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { ProductServiceService } from './../../../service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductServiceService) { }
  data: IProduct[];
  dataItem: any;
  image: File;
  ngOnInit() {
    this._productService.index().subscribe((data) => {
      this.data = data;
      console.log(data);
    },
      (error) => {
        console.log(error);
      },
      () => {
        this.data.forEach((element) => {
          element.image = element.image === null ? '' : this._productService.getImage((element.image));
        });
      });
  }
  edit(i) {
    this.dataItem = i;
    console.log(this.dataItem);
  }
  // getImage(name): string {
  //   let imagePath = '';
  //   .subscribe((response) => {
  //     imagePath = response;
  //     console.log(imagePath);
  //   }, (error) => { }, () => {
  //     return imagePath;
  //   });
  //   return imagePath;
  // }
}
