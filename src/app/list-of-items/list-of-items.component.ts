import { ProductService } from './../products/product.service';
import { IProduct } from './../products/product';
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {
    addCartArr=[];
    pageTitle: string = 'Menu List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private productService: ProductService,
                private route: ActivatedRoute) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.showImage = (this.route.snapshot.queryParams['showImage'] === 'true');
        // console.log(this.route.snapshot.queryParamMap.get('filterBy'));            

        this.productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }
    addToCart(details){
        this.addCartArr.push(details);
        // this.productService.setAddCart.emit(this.addCartArr);
        this.productService.sendaddcartsubject.next(this.addCartArr);
    }
incrementQuantity(val,product){
  product.productCode=val+1;
}
decrementQuantity(val,product){
  if(val>1){
 product.productCode=val-1;
  }
}
}
