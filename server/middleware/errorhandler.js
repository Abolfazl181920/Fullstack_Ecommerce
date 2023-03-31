const errorHandler = (err, res, next) => {
    if (res.headersSent) {
        return next(err)
    } else {
        res.status(500)
        res.render('error', { error: err })
    }
}

module.exports = { errorHandler }