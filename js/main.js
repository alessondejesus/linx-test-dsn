import productModel from './models/Product.js'
const product = new productModel()

const showProducts = async () => {
    const productModel = product.create({
        imageUrl: 'http://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538',
        name: 'hahahaha producto',
        description: 'hahaha descricao',
        oldPrice: 200.00,
        price: 21.89,
        installmentCount: 90,
        installmentValue: 19999.00
    })
    product.post('products', productModel)
}
showProducts()
showProducts()
showProducts()
showProducts()
showProducts()
showProducts()

