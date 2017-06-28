import { AddToCartComponent } from 'app/add-to-cart/add-to-cart.component';

import { PaytmComponent } from './../paytm/paytm.component';
import { ListOfItemsComponent } from './../list-of-items/list-of-items.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductResolver } from './product-resolver.service';
import { ProductEditGuard } from './product-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      },{path: 'listOfItems', component: ListOfItemsComponent },
      
      {path: 'paytm', component: PaytmComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { product: ProductResolver },
        canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe,
    ListOfItemsComponent,
    PaytmComponent
  ],
  providers: [
    ProductResolver,
    ProductEditGuard
  ]
})
export class ProductModule { }
