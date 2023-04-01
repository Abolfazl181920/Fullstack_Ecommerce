const { Router } = require('express')
const { pool } = require("../../config/db.config")
const router = Router()

router.post("/signup", (req, res) => {
    const q = 'INSERT INTO ecommerce.users (`userName`, `userPassword`, `userEmail`) VALUES (?)'
    const user = [
        req.body.userName,
        req.body.userPassword,
        req.body.userEmail,
    ]

    pool.query(q, [ user ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })

    // if (!userName || !userEmail || !userPassword) {
    //     return res.status(400).json({ message: 'Please fill in all fields' });
    // }
})


module.exports = router