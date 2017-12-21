import { LoginServiceService } from './service/login-service.service';
import { ProductServiceService } from './service/product-service.service';
import { OrderServiceService } from './service/order-service.service';
import { DashboardServiceService } from './service/dashboard-service.service';
import { CustomerServiceService } from './service/customer-service.service';
import { CategoryServiceService } from './service/category-service.service';
import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryFormComponent } from './components/admin-components/category-form/category-form.component';
import { CategoryListComponent } from './components/admin-components/category-list/category-list.component';
import { CustomerListComponent } from './components/admin-components/customer-list/customer-list.component';
import { CustomerOrdersComponent } from './components/admin-components/customer-orders/customer-orders.component';
import { DashboardComponent } from './components/admin-components/dashboard/dashboard.component';
import { OrderDetailComponent } from './components/admin-components/order-detail/order-detail.component';
import { OrderListComponent } from './components/admin-components/order-list/order-list.component';
import { ProductFormComponent } from './components/admin-components/product-form/product-form.component';
import { ProductListComponent } from './components/admin-components/product-list/product-list.component';
import { ProductUploadComponent } from './components/admin-components/product-upload/product-upload.component';
import { LayoutAdminComponent } from './components/admin-components/layout-admin/layout-admin.component';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LayoutCustomerComponent } from './components/customer-component/layout-customer/layout-customer.component';
import { ChatBoxComponent } from './components/admin-components/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    CategoryListComponent,
    CustomerListComponent,
    CustomerOrdersComponent,
    DashboardComponent,
    OrderDetailComponent,
    OrderListComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductUploadComponent,
    LayoutAdminComponent,
    LoginFormComponent,
    LayoutCustomerComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    CategoryServiceService,
    CustomerServiceService,
    DashboardServiceService,
    OrderServiceService,
    ProductServiceService,
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
