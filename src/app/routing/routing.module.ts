import { LoginFormComponent } from './../components/login-components/login-form/login-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductUploadComponent } from './../components/admin-components/product-upload/product-upload.component';
import { ProductFormComponent } from './../components/admin-components/product-form/product-form.component';
import { ProductListComponent } from './../components/admin-components/product-list/product-list.component';
import { OrderDetailComponent } from './../components/admin-components/order-detail/order-detail.component';
import { OrderListComponent } from './../components/admin-components/order-list/order-list.component';
import { CustomerOrdersComponent } from './../components/admin-components/customer-orders/customer-orders.component';
import { CustomerListComponent } from './../components/admin-components/customer-list/customer-list.component';
import { CategoryFormComponent } from './../components/admin-components/category-form/category-form.component';
import { CategoryListComponent } from './../components/admin-components/category-list/category-list.component';
import { DashboardComponent } from './../components/admin-components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: 'admin',                  component: DashboardComponent},
  {path: 'admin/category',          component: CategoryListComponent},
  {path: 'admin/category/form',     component: CategoryFormComponent},
  {path: 'admin/customer',          component: CustomerListComponent},
  {path: 'admin/customer/orders/:id',   component: CustomerOrdersComponent},
  {path: 'admin/order',             component: OrderListComponent},
  {path: 'admin/order/detail/:id',      component: OrderDetailComponent},
  {path: 'admin/product',           component: ProductListComponent},
  {path: 'admin/product/form',      component: ProductFormComponent},
  {path: 'admin/product/upload',    component: ProductUploadComponent},
  {path: 'admin/login',             component: LoginFormComponent},
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
