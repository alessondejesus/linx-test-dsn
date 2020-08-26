export default class Controller {
    isMobile = () => {
        return screen.width <= 480 ? true : false
    }
    getClassButton = (idButton) => {
        const loadProducButton = document.getElementById(idButton)
        return loadProducButton.className
    }
    setClassButton = (idButton, newClassButton) => {
        const loadProducButton = document.getElementById(idButton)
        loadProducButton.setAttribute('class', newClassButton)
    }
    productPost = (elementById, productModel) => {

        /* instancing of product by DOM id */
        let products = document.getElementById(elementById)

        /* creating product */
        products.appendChild(productModel)
    }
}