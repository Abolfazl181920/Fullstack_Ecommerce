const express = require('express')
const app = express()
require("dotenv").config()
require("./config/db.config")

const { 
    corsMW,
    errorHandler,
    jsonMW
} = require("./middleware/index")
const { home, getProducts, postProduct, getUser, postUser } = require("./routers/index")

app.use(corsMW)
app.use(jsonMW)
app.use(home, getProducts, postProduct, getUser, postUser)

app.use(errorHandler)


app.listen(3001, () => console.log('server is running on port 3001!'))