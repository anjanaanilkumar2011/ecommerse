import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private productservice:ProductService,private activatedroute:ActivatedRoute) { }
productid:any;
productdata:any;
  ngOnInit(): void {
this.activatedroute.params.subscribe((data:any)=>{
  console.log(data);
  this.productid=data['id']
})
this.productservice.viewproduct(this.productid).subscribe((item:any)=>{
  console.log(item);
  this.productdata=item; 
})

  }

}
