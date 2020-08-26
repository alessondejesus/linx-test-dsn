export default class Request {
    product = async (url) => {
        try {
            const response = await axios.get(url)
            return response.data.products ? response.data.products : false
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
    nextUrl = async (url) => {
        try {
            const response = await axios.get(url)
            return response.data.nextPage ? 'https://' + response.data.nextPage : false
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
}