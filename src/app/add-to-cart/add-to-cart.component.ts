import { ProductService } from './../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  totalPrice: number=0;
  cartObject: any;
  cartlength: any;
  condition: boolean = false;
    pageTitle: string = 'Menu List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    // this.addCartLeng();
     this.addCartLeng();
     this.totalCartPrice();
    //  this.productService.sendaddcartsubject.next(this.cartObject);
  }
addCartLeng(){
       this.cartObject= this.productService.getcartdetails();
    }
//         addCartLength(){
//         this.productService.sendaddcartsubject.subscribe(data =>{ 
//     this.cartObject=data;
//   this.cartlength=this.cartObject.length;
//   console.log("cscscsdcscscscscsscscscs",this.cartlength);
// });
//     }
incrementQuantity(val,product){
  product.productCode=val+1;
  this.totalCartPrice();
}
decrementQuantity(val,product){
  if(val>1){
 product.productCode=val-1;
 this.totalCartPrice();
  }
 
  
}
totalCartPrice(){
  this.totalPrice=0;
  this.cartObject.forEach(element => {
   this.totalPrice=this.totalPrice + element.price*element.productCode;
  });
}

removeFromCart(i){
this.cartObject.splice(i,1);
this.productService.sendaddcartsubject.next(this.cartObject);
this.totalCartPrice();
}
}
