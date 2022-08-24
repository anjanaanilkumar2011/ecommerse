import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import {HttpClientModule} from '@angular/common/http';
import { CustomersigninComponent } from './login/customersignin/customersignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerloginComponent } from './login/customerlogin/customerlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersigninComponent,
    CustomerloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
