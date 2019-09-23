// import all the required modules
const express = require('express')
// const app = express()
const Route = express.Router()

// import controller
const productsController = require('../controllers/products')

Route
    .get('/products', productsController.getProducts)
    .post('/products', productsController.addProduct)
    .put('/products/:id', productsController.editProduct)
    .delete('/products/:id', productsController.deleteProduct)


module.exports = Route