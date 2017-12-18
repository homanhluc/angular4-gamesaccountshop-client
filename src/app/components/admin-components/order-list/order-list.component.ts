import { OrderServiceService } from './../../../service/order-service.service';
import { DashboardServiceService } from './../../../service/dashboard-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  dataCount: any = [];
  dataNewOrders: any = [];
  pageSize: number;
  page: any = 0;
  previousPage: any;
  timeUpdate: any;
  timeZ: string;
  testHours: any;
  // tslint:disable-next-line:no-trailing-whitespace
  
  constructor(private _dashboardService: DashboardServiceService,
              private _orderService: OrderServiceService) { }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this._dashboardService.newestOrders(page - 1).subscribe((dataNewOrders) => {
        this.dataNewOrders = dataNewOrders.content;
        this.pageSize = dataNewOrders.totalPages * 10;
        this.timeUpdate = new Date();
        this.testHours = new Date().getHours() > 12 ? this.timeZ = 'PM' : this.timeZ = 'AM';
        console.log(this.dataNewOrders);
      });
    }
  }
  delete(i) {
    this._orderService.delete(i.id).subscribe((data) => {
      this.dataNewOrders.splice(this.dataNewOrders.indexOf(i), 1);
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
    // get count item
    this._dashboardService.index().subscribe((dataCount) => {
      this.dataCount = [
        dataCount[0].userCountAll,
        dataCount[0].categoryCountAll,
        dataCount[0].productCountAll,
        dataCount[0].orderCountAll
      ];
    }, (error) => {
      console.log(error);
    });
  }
}

