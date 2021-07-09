const notFound = (req, res, next) => {
    res.status(400).json({
        message: "sorry, not found"
    })
}

const errorHandling = (err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        message: err.message
    })
}

module.exports = {
    errorHandling, 
    notFound
}