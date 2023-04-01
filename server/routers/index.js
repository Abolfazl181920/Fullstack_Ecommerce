const home = require("../routers/home")
const getProducts = require("./products/getProducts")
const postProduct = require("./products/postProduct")
const getUser = require("./users/getUser")
const postUser = require("./users/postUser")

module.exports = {
    home,
    getProducts,
    postProduct,
    getUser,
    postUser
}