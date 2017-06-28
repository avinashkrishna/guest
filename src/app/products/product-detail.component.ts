import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Item Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.product = this.route.snapshot.data['product'];
    }
}
