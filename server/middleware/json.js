const express = require("express")
const app = express()

const jsonMW = app.use(express.json({
    limit: '2mb'
}))

module.exports = { jsonMW }