import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

//   addProductForm = this.formBuilder.group({
//   {
//     id:[],
//     ProductName: [""],
//     categoryid: [""],
//     description: [""],
//     price: [""],
//     is_available: [""],
//     productimage: [""],
//     rating: [""],
//     vendor_name: [""],
//     warranty: [""]
//   }
// })
  constructor() { }

  ngOnInit(): void {
  }

// addProduct(){


//   let newProduct=(
//     id: this.addProductForm.value.id,
//     ProductName: [""],
//     categoryid: [""],
//     description: [""],
//     price: [],
//     is_available: [""],
//     productimage: [""],
//     rating: [""],
//     vendor_name: [""],
//     warranty: [""]
//   )

//   this.productService.addProduct(newProduct).subscribe((data;any)=>{
//     alert('product added successfully');
    
//   })
// }

}
