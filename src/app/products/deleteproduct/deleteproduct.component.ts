import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
productid:any
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService,private router:Router){}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      this.productid=data['id']
    })
    this.productservice.deleteproduct(this.productid).subscribe((item:any)=>{
      alert("Deleted successfully")
      this.router.navigateByUrl('products')
    })
   
  }

}
