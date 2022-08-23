import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-customersignin',
  templateUrl: './customersignin.component.html',
  styleUrls: ['./customersignin.component.css']
})
export class CustomersigninComponent implements OnInit {
  
  signupform = this.fb.group({
    id:[],
    username:[''],
    email:[''],
    password:[''],
    mobile:['']

  })
  constructor( private fb:FormBuilder,private service:ProductService,private router:Router) {}

  ngOnInit(): void {
    
    
  }
 register(){
alert("hai register")

let signinusers={
  id:this.signupform.value.id,
  username:this.signupform.value.username,
  email:this.signupform.value.email,
  password:this.signupform.value.password,
  mobile:this.signupform.value.mobile
}
alert(signinusers);
this.service.signinusers(signinusers).subscribe((data:any)=>{
console.log(data); 
alert("Registartion successful")
this.router.navigateByUrl('/login')
})

 }
}
