import { CustomerServiceService } from './../../../service/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  data: any = [];

  constructor(private _customerService: CustomerServiceService) { }

  ngOnInit() {
    this._customerService.index().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
  delete(i) {
    this._customerService.delete(i.id).subscribe((data) => {
      console.log(data);
      this.data.splice(this.data.indexOf(i), 1);
    }, (error) => {
      console.log(error);
    });
  }
}
