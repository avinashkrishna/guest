import { ProductService } from './../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    cartlength: any;
    public pageTitle: string = 'Welcome';
    constructor(private productService:ProductService){

    }
    ngOnInit() {
    this.addCartList();
  }
addCartList(){
         this.productService.setAddCart.subscribe(data => {this.cartlength=data.length;
         console.log("kooooooooooooo",this.cartlength)});
        } 
}
