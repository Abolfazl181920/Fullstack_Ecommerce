const { Router } = require('express')
const { pool } = require("../../config/db.config")
const router = Router()
const bcrypt = require("bcrypt")

router.post("/signup", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    function hashPassword(password, callback) {
        // Generate a salt
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return callback(err)
      
          // Hash the password using the generated salt
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return callback(err)
            callback(null, hash)
            })
        })
    }      

    hashPassword(password, (err, hashedPassword) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Internal Server Error')
        }

        const newUser = {
            username,
            email,
            password: hashedPassword
        }

        pool.getConnection((err, connection) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' })
            }

            connection.query('INSERT INTO users SET ?', newUser, (error) => {
                connection.release()

                if (error) {
                    return res.status(500).json({ message: 'Internal server error' })
                }

                res.status(201).json({ message: 'User created successfully' })
            })
        })
    })
})

module.exports = router