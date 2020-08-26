/* importing modules */
import Controller from './controllers/product-controllers.js'
import productModel from './models/Product.js'
import Request from './service/product.js'

/* instantiating class */
const controller = new Controller()
const product = new productModel()
const request = new Request()

/* constant */
const app = document.getElementById('products')
const button = document.getElementById('load-product-button')
const baseUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

/* USEFUL - show products */
const createProduct = (response, inicial, final, newClassButton) => {
    for (let i in response.slice(inicial, final)) {
        const productModel = product.create(response.slice(inicial, final)[i])
        controller.productPost('products', productModel)
    }
    controller.setClassButton('load-product-button', newClassButton)
}

/* loading products, this a asynchronous function ;) */
const loadProducts = async (url) => {
    try {
        /* for desktops */
        if (!controller.isMobile()) {

            /* getting products here :D */
            let response = await request.product(url)

            /* load 8th products */
            for (let i in response) {
                const productModel = product.create(response[i])
                controller.productPost('products', productModel)
            }

            let nextUrl = url
            controller.setClassButton('load-product-button', 1)

            /* on request news products */
            button.onclick = async () => {
                let classButton = controller.getClassButton('load-product-button')

                switch (classButton) {
                    case '1':
                        /* variables */
                        nextUrl = await request.nextUrl(nextUrl)
                        response = await request.product(nextUrl)
                        createProduct(response, 0, 4, 2)
                        break;
                    case '2':
                        createProduct(response, 4, 8, 1)
                        break;
                    default:
                        alert('internal server error')
                        console.log('cannot get class of button')
                        break;
                }
            }
        } else {
            /* for mobiles */
            /* products here :D */
            let response = await request.product(url)

            /* load 4th products */
            createProduct(response, 0, 4)

            let nextUrl = url
            controller.setClassButton('load-product-button', 5)


            /* on request news products */
            button.onclick = async () => {

                /* products must be loaded here according to the button class */
                let classButton = controller.getClassButton('load-product-button')

                switch (classButton) {
                    case '1':
                        nextUrl = await request.nextUrl(nextUrl)
                        response = await request.product(nextUrl)
                        createProduct(response, 0, 2, 2)
                        break
                    case '2':
                        createProduct(response, 2, 4, 3)
                        break
                    case '3':
                        createProduct(response, 4, 6, 4)
                        break
                    case '4':
                        createProduct(response, 6, 8, 1)
                        break
                    case '5':
                        createProduct(response, 4, 6, 6)
                        break
                    case '6':
                        createProduct(response, 6, 8, 1)
                        break;
                    default:
                        alert('internal server error')
                        console.log('cannot get class of button')
                        break;
                }
            }
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
    }
}

app.addEventListener("load", loadProducts(baseUrl))