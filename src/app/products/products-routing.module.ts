import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from '../login/customerlogin/customerlogin.component';
import { CustomersigninComponent } from '../login/customersignin/customersignin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductsComponent } from './products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', component: ViewallProductComponent},
  { path: 'viewproduct/:id', component: ViewproductComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'updateproduct/:id', component: UpdateproductComponent},
  { path: 'deleteproduct/:id', component: DeleteproductComponent},
  { path: 'customersignin', component: CustomersigninComponent},
  { path: 'customerlogin', component: CustomerloginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
