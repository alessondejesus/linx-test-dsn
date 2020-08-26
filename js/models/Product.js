export default class productModel {
    create = (model) => {
        
        /*main model element */
        const product = document.createElement('div')
        product.setAttribute('class', 'products')

        /* image */
        const productImage = document.createElement('img')
        productImage.setAttribute('src', model.image.replace('//', 'https://'))

        const productCaption = document.createElement('div')
        productCaption.setAttribute('class', 'product-caption')
        /* name */
        const productName = document.createElement('h4')
        productName.appendChild(document.createTextNode(model.name))

        /* description */
        const productDescription = document.createElement('p')
        productDescription.appendChild(document.createTextNode(model.description))

        /* prices and installment */
        const productPrices = document.createElement('div')
        productPrices.setAttribute('class', 'product-price')

        /* old price */
        const productOldPrice = document.createElement('span')
        productOldPrice.appendChild(document.createTextNode(`De: R$${String(parseFloat(model.oldPrice)).replace('.', ',')}`))

        /* new price */
        const productNewPrice = document.createElement('h5')
        productNewPrice.appendChild(document.createTextNode(`Por: R$${String(parseFloat(model.price)).replace('.', ',')}`))

        /* installment */
        const installment = document.createElement('span')
        installment.appendChild(document.createTextNode(`ou ${model.installments.count}x de R$${String(parseFloat(model.installments.value)).replace('.', ',')}`))

        /* buttons */
        const button = document.createElement('button')
        button.appendChild(document.createTextNode('Comprar'))

        /* creating product */
        product.appendChild(productImage)
        product.appendChild(productCaption)
        productCaption.appendChild(productName)
        productCaption.appendChild(productDescription)
        productCaption.appendChild(productPrices)
        productPrices.appendChild(productOldPrice)
        productPrices.appendChild(productNewPrice)
        productPrices.appendChild(installment)
        productPrices.appendChild(button)

        return product
    }
}