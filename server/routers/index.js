const home = require("../routers/home")
const getProducts = require("./products/getProducts")
const postProduct = require("./products/postProduct")

module.exports = {
    home,
    getProducts,
    postProduct
}