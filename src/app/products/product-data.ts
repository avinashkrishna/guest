import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let products: IProduct[] = [
            {
                'id': 1,
                'productName': 'chicken biriyani',
                'productCode': 1,
                'releaseDate': 'March 19, 2017',
                'description': 'homely chicken wanna taste it',
                'price': 100,
                'starRating': 3.2,
                'imageUrl': 'http://indianhealthyrecipes.com/wp-content/uploads/2012/11/easy-chicken-biryani-recipe-16.jpg',
                'category': 'non-veg',
                'tags': ['chicken', 'biriyani', 'roasted chicken', 'home']
            },
            {
                'id': 2,
                'productName': 'mango dal',
                'productCode': 1,
                'releaseDate': 'March 18, 2017',
                'description': 'mango dal dont miss',
                'price': 30,
                'starRating': 4.2,
                'imageUrl': 'http://recipes.timesofindia.com/photo/55559715.cms',
                'category': 'veg'
            },
            {
                'id': 5,
                'productName': 'salad',
                'productCode': 1,
                'releaseDate': 'May 21, 2017',
                'description': 'fruit salad help yourselves',
                'price': 15,
                'starRating': 4.8,
                'imageUrl': 'http://del.h-cdn.co/assets/16/15/1460645766-fruit-salad.png',
                'category': 'deserts',
                'tags': ['fruits', 'ice cream', 'juice']
            },
            {
                'id': 8,
                'productName': 'starters',
                'productCode': 1,
                'releaseDate': 'May 15, 2017',
                'description': 'Both veg and non-veg available',
                'price': 80,
                'starRating': 3.7,
                'imageUrl': 'http://i.ndtvimg.com/i/2015-07/kakori-kebabs-625_625x350_81436946974.jpg',
                'category': 'starters',
            },
            {
                'id': 10,
                'productName': 'Meals',
                'productCode': 1,
                'releaseDate': 'October 15, 2015',
                'description': 'different items are available all are andhra style',
                'price': 40,
                'starRating': 4.6,
                'imageUrl': 'http://demo.webulous.in/restaurant/wp-content/uploads/sites/5/2014/06/chennaicitypage_03art1_gt819dhqj119nxg_p3_meals.jpg',
                'category': 'south meals',
            }
        ];
        return { products };
    }
}
