import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
search = new BehaviorSubject("")
  constructor(private httpClient:HttpClient) { }
  //api call to get all products
  viewallproduct()
  {
    const baseURL="http://localhost:3000/products"
    return this.httpClient.get(baseURL)
  }
  //api call for a singleproduct
  viewproduct(productid:any)
  {
    const baseURL="http://localhost:3000/products/"+productid
    return this.httpClient.get(baseURL)
  }
  //api call to delete a single product
  deleteproduct(productid:any){
    const baseURL="http://localhost:3000/products/"+productid
    return this.httpClient.delete(baseURL)
  }
  //api call to delete a single product
  addproduct(productdata:any){
    const baseURL="http://localhost:3000/products/"
    return this.httpClient.post(baseURL,productdata)
  }
  signinusers(signinusers:any){
   console.log(signinusers);
   const baseURL="http://localhost:3000/signinusers/"
   return this.httpClient.post(baseURL,signinusers)
  }
  loginusers(logindata:any){
    console.log(logindata);
    const baseURL="http://localhost:3000/signinusers/"
    return this.httpClient.get(baseURL,logindata)
   }

}
