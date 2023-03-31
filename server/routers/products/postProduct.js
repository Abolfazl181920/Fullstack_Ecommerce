const { Router } = require("express")
const router = Router()
const { pool } = require("../../config/db.config")

router.post("/products", (req, res) => {
    const q = "INSERT INTO ecommerce.products (`productImage`, `productTitle`, `productModel`, `productPrice`, `productColor`, `productDescr`, `productSum`, `productOff`) VALUES (?)"
    const values = [
        req.body.productImage,
        req.body.productTitle,
        req.body.productModel,
        req.body.productPrice,
        req.body.productColor,
        req.body.productDescr,
        req.body.productSum,
        req.body.productOff,
    ]

    pool.query(q, [ values ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router