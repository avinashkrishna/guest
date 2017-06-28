import { ProductService } from './products/product.service';
import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './user/auth.service';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    cartObject: any;
    cartlength: any;
    pageTitle: string = 'GuestOrColleague';
    loading: boolean = true;

    constructor(private authService: AuthService,
                private messageService: MessageService,
                private router: Router,private productService:ProductService) {

        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
       
    }
  
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.addCartLength();
}
    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    displayMessages(): void {
        // Example of primary and secondary routing together
        // this.router.navigate(['/login', {outlets: { popup: ['messages']}}]); // Does not work
        // this.router.navigate([{outlets: { primary: ['login'], popup: ['messages']}}]); // Works
        this.router.navigate([{outlets: { popup: ['messages']}}]); // Works
        this.messageService.isDisplayed = true;
    }

    hideMessages(): void {
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }

     addCartLength(){
        this.productService.sendaddcartsubject.subscribe(data =>{ 
    this.cartObject=data;
  console.log("ppppppppppppppppppppppppppppppppp",this.cartObject);
    this.cartlength=this.cartObject.length});
    }
    sendToCart(){
        this.productService.sendAddCart(this.cartObject);
        console.log("kemonnnnnnnnnnnnnnnnnn",this.cartObject);
    }
}
