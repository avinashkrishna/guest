import { AddToCartComponent } from 'app/add-to-cart/add-to-cart.component';

import { FormsModule } from '@angular/forms';
import { ProductService } from './products/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    UserModule,
    MessageModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AddToCartComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
