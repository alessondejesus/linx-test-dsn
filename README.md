## Linx - Challenge | Frontend Developer
   ![remaster](https://img.shields.io/badge/remaster-v2.0.7-green?labelColor=black&style=flat) ![stable](https://img.shields.io/badge/stable-v2.0.7-blue?labelColor=black&style=flat)  
 
**[Preview here...](https://alessondejesus.github.io/linx-test-dsn/ "Click here")**
###### *The ideal resolution is 1500px,  check your settings for the best experience :D*

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
```

```javascript
Request.product(apiUrl) // get products by API URL
Request.nextUrl(baseUrl) // get next page url from a baseURL
 ```
 ##### Product model
 ```sh
.
├── js
│   └── models
│   	└── Product.js

```

```javascript
productModel.create(product) 

// create and return a model. @product is a object and should return:
product.image // example: '//images.site.com/back-cat.jpg'
product.name // example: 'paint'
product.decription // example: 'paints is so is beautiful'
product.oldPrice  // example: 6.99
product.price // example: 5.99
product.installments.count // example: 10
product.installments.value // example: 0.69
 ```
  ##### Controllers
 ```sh
.
├── js
│   └── controllers
│   	└── product-controllers.js

```

```javascript
Controller.isMobile() // return a bolean value if device is mobile 
Controller.getClassButton(idButton) // get a class of a button by ID
Controller.setClassButton(idButton, newClassButton) // define a new class of a button by ID
Controller.productPost(productModel) // create a new product by DOM HTML

 ```
