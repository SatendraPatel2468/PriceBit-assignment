const epxress = require('express')
const app = epxress()

app.use(epxress.json())

//Import all routes
const products = require('./routes/product')

app.use('/api/v1', products)

module.exports = app