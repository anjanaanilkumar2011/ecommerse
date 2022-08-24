import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewallProductComponent,
    ViewproductComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    FilterPipe,
    // ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  
  ]
})
export class ProductsModule { }
