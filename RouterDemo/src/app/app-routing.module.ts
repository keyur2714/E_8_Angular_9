import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';
import { OrdersComponent } from './admin/orders/orders.component';


const routes: Routes = [
  {path : 'home',component : HomeComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'sales', component : SalesComponent},
  {
    path : 'admin', component : AdminComponent,
    children : [
      {path : 'products' , component : ProductsComponent},
      {path : 'users' , component : UsersComponent},
      {path : 'orders' , component : OrdersComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
