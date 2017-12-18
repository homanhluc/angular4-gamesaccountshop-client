import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ProductServiceService } from './../../../service/product-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  constructor(private _productService: ProductServiceService) {}
  @Input() passData?: any;
  name: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this._productService.postUpload(this.passData.id , this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
  // onSubmit(formProduct: NgForm) {
  //   if (this.passData === undefined) {
  //     this._productService.save(formProduct.value).subscribe((data) => {
  //       console.log(formProduct.value);
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }else {
  //     this._productService.postUpload(this.passData.id, undefined).subscribe((data) => {
  //       console.log(formProduct.value);
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }
  // }
}
