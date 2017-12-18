import { OrderServiceService } from './../../../service/order-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerServiceService } from './../../../service/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  constructor(private _customerService: CustomerServiceService,
    private _router: ActivatedRoute,
    private _routerDetail: Router,
    private _orderService: OrderServiceService) { }
  id: any;
  data;
  ngOnInit() {
    this._router.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
    this._customerService.showOrders(this.id).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  orderDetail(id) {
    this._routerDetail.navigate(['/admin/order/detail/' + id]);
  }
  delete(i) {
    this._orderService.delete(i.id).subscribe((data) => {
      console.log(data);
      this.data.splice(this.data.indexOf(i), 1);
    }, (error) => {
      console.log(error);
    });
  }
}
