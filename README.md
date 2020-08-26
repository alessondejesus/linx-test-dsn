## Linx - Challenge | Frontend Developer
   ![remaster](https://img.shields.io/badge/remaster-v2.0.7-green?labelColor=black&style=flat) ![stable](https://img.shields.io/badge/stable-v2.0.7-blue?labelColor=black&style=flat)  
 
**[Preview here...](https://alessondejesus.github.io/linx-test-dsn/ "Click here")**
###### _  The ideal resolution is 1500px,  check your settings for the best experience :D_

### v2.0.7 - Features

- Getting by API
- Responsive layout
- Code improvements

### Folder Structure
  ```sh
.
├── index.html
├── favicon.io
├── js
│   └── main.js
│   └── controllers
│   	└── product-controllers.js
│   └── models
│   	└── Product.js
│   └── service
│   	└── product.js
├── css
│   └── style.css
5 directories, 7 files
```
For the project to build,  **these files must exist with exact filenames**:

-   `index.html`  is the page template;
-   `js/main.js`  is the JavaScript entry point.

### Usage Functions
##### Requests
 ```sh
.
├── js
│   └── service
│   	└── product.js

Request.product(apiUrl) /* get products by API URL */
 Request.nextUrl(baseUrl) /* get next page url from a baseURL */
 ```
 ##### Product model
 ```sh
.
├── js
│   └── models
│   	└── Product.js

productModel.create(product) 

/* 
create and return a model. @product is a object and should return:
- model.image example: '//images.site.com/back-cat.jpg'
- model.name example: 'paint'
- model.decription example: 'paints is so is beautiful'
- model.oldPrice  example: 6.99
- model.price example: 5.99
- mode.installments.count example: 10
- mode.installments.value example: 0.69
*/
 ```
  ##### Controllers
 ```sh
.
├── js
│   └── controllers
│   	└── product-controllers.js

Controller.isMobile() /* return a bolean value if device is mobile */
Controller.getClassButton(idButton) /* get a class of a button by ID */
Controller.setClassButton(idButton, newClassButton) /* define a new class of a button by ID*/
Controller.productPost(productModel) /* create a new product by DOM HTML */

 ```