import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersigninComponent } from './customersignin/customersignin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersigninComponent,
    CustomerloginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
