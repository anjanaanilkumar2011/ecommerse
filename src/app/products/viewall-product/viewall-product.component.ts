import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {
productlist:any;
filtercategory:any;
searchkey:any='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewallproduct().subscribe(data=>{
    this.productlist=data
    //this.filtercategory=data
    this.filter('')//
      console.log(data);  
      })
     this.productService.search.subscribe((value:any)=> {
      this.searchkey=value
     }) 
    
  }
filter(category:any)
{
this.filtercategory=this.productlist
.filter((item:any)=>{
  if(item.categoryid==category||category=='')
  {
    console.log(item);
    
    return item
  }

})
}
}
