import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import {HttpClientModule} from '@angular/common/http';
import { CustomersigninComponent } from './login/customersignin/customersignin.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { CustomerloginComponent } from './login/customersignin/customerloginin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
