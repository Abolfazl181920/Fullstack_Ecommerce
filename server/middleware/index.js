const { corsMW } = require("./cors")
const { errorHandler } = require("./errorhandler")
const { jsonMW } = require("./json")

module.exports = { corsMW, errorHandler, jsonMW }