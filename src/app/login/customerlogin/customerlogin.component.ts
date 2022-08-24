import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  loginform = this.fb.group({
     email:['',[Validators.required]],
     password:['',[Validators.required]]

  })
  constructor(private fb:FormBuilder,private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let logindata={
      email:this.loginform.value.email,
      password:this.loginform.value.password
      // var email=this.loginform.value.email
      // var password=this.loginform.value.password
    }
     if(this.loginform.valid){
      const result = this.service.loginusers(logindata)
      if(result)
      {
        alert("Login successful")
        this.router.navigateByUrl('/products')
      }
     }
     else{
      alert("Invalid form")
     }
 }
}
