import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrderServiceService } from './../../../service/order-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private _orderService: OrderServiceService, private _router: ActivatedRoute) { }
  id: any;
  data;
  ngOnInit() {
    this._router.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
    this._orderService.show(this.id).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

}
