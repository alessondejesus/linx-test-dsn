const baseUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products'
const app = document.getElementById('app')
const loadProducButton = document.getElementById('load-product-button')
let pagination = {
    start: true,
    storage: false,
    fistPage: '',
    secondPage: '',
    result: '',
    url: baseUrl
}

class Request {
    mobile = () => {
        return screen.width <= 480 ? true : false
    }
    product = async (url) => {
        try {
            const response = await axios.get(url)
            return response.data.products ? response.data.products : false
        } catch (error) {
            console.log(error)
            alert('internal server error cod. 500')
        }
    }
    nextPageUrl = async (url) => {
        try {
            const response = await axios.get(url)
            return response.data.nextPage ? response.data.nextPage : false
        } catch (error) {
            console.log(error)
            alert('internal server error cod. 500')
        }
    }
}
const request = new Request()

const productModel = ({ imageUrl, name, description, oldPrice, price, installmentCount, installmentValue }) => {

    //instancing of product by DOM id
    let app = document.getElementById('app')

    //main model element
    const product = document.createElement('div')
    product.setAttribute('class', 'product col-lg-3')

    // image
    const image = document.createElement('img')
    image.setAttribute('src', imageUrl)
    const productThumbnail = document.createElement('div')
    productThumbnail.setAttribute('class', 'product-thumbnail')
    productThumbnail.appendChild(image)

    // name
    const productName = document.createElement('h4')
    productName.appendChild(document.createTextNode(name))

    //description
    const productDescription = document.createElement('p')
    productDescription.appendChild(document.createTextNode(description))

    //prices and installment
    //old price
    const productOldPrice = document.createElement('span')
    productOldPrice.appendChild(document.createTextNode(`De: R$${String(oldPrice).replace('.', ',')}`))

    //new price
    const productNewPrice = document.createElement('h5')
    productNewPrice.appendChild(document.createTextNode(`Por: R$${String(price).replace('.', ',')}`))

    //installment
    const installment = document.createElement('span')
    installment.appendChild(document.createTextNode(`ou ${installmentCount}x de R$${String(installmentValue).replace('.', ',')}`))

    //inserting prices
    const productPrice = document.createElement('div')
    productPrice.setAttribute('class', 'product-price')
    productPrice.appendChild(productOldPrice)
    productPrice.appendChild(productNewPrice)
    productPrice.appendChild(installment)


    //call to buy
    const button = document.createElement('button')
    button.appendChild(document.createTextNode('Comprar'))
    const productButtons = document.createElement('div')
    productButtons.setAttribute('class', 'product-buttons')
    productButtons.appendChild(button)

    // inserting caption
    const productCaption = document.createElement('div')
    productCaption.setAttribute('class', 'product-caption')
    productCaption.appendChild(productName)
    productCaption.appendChild(productDescription)
    productCaption.appendChild(productPrice)
    productCaption.appendChild(productButtons)

    //inserting product
    product.appendChild(productThumbnail)
    product.appendChild(productCaption)
    app.appendChild(product)
}
const loadProducts = (a) => {
    start(a)
}

const start = async (url) => {
    try {
        if (request.mobile()) {
            if (pagination.start) {
                pagination.result = await request.product(pagination.url)
                pagination.fistPage = pagination.result.slice(0, 4)
                pagination.secondPage = pagination.result.slice(4, 8)
                loadProducButton.setAttribute('onclick', `loadProducts('${pagination.url}')`)
            } else {
                pagination.url = 'https://' + await request.nextPageUrl(pagination.url)
                loadProducButton.setAttribute('onclick', `loadProducts('${pagination.url}')`)
            }
            if (pagination.storage) {
                let result = pagination.secondPage
                for (let item in result) {
                    productModel({
                        imageUrl: result[item].image.replace('//', 'https://'),
                        name: result[item].name,
                        description: result[item].description,
                        oldPrice: result[item].oldPrice,
                        price: result[item].price,
                        installmentCount: result[item].installments.count,
                        installmentValue: result[item].installments.value
                    })
                }
                pagination.storage = false
                pagination.start = true
            } else {
                let result = pagination.fistPage
                for (let item in result) {
                    productModel({
                        imageUrl: result[item].image.replace('//', 'https://'),
                        name: result[item].name,
                        description: result[item].description,
                        oldPrice: result[item].oldPrice,
                        price: result[item].price,
                        installmentCount: result[item].installments.count,
                        installmentValue: result[item].installments.value
                    })
                }
                pagination.storage = true
                pagination.start = false
            }




        } else {
            let result = await request.product(url)
            for (let item in result) {
                productModel({
                    imageUrl: result[item].image.replace('//', 'https://'),
                    name: result[item].name,
                    description: result[item].description,
                    oldPrice: result[item].oldPrice,
                    price: result[item].price,
                    installmentCount: result[item].installments.count,
                    installmentValue: result[item].installments.value
                })
            }
            loadProducButton.setAttribute('onclick', `loadProducts('https://${await request.nextPageUrl(url)}')`)
        }
    } catch (error) {
        console.log(error)
        alert('internal server error cod. 500')
    }
}

app.addEventListener("load", start(baseUrl))