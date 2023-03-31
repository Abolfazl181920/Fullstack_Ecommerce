const express = require("express")
const cors = require("cors")
const app = express()

const corsMW = app.use(cors({
    origin: [ 'http://localhost:3001', 'http://localhost:5173', 'https://hoppscotch.io' ],
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
    allowedHeaders: ['Content-Type']
}))

module.exports = { corsMW }