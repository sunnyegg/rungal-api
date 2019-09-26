// import all the required modules
const express = require('express')
const Route = express.Router()

// import controller
const productsController = require('../controllers/products')

Route
    .get('/products', productsController.getProducts)
    .get('/products/:id', productsController.getProductbyID)
    .post('/products', productsController.addProduct)
    .patch('/products/order/:id', productsController.addQuantityProduct)
    .patch('/products/reduce/:id', productsController.reduceQuantityProduct)
    .put('/products/:id', productsController.editProduct)
    .delete('/products/:id', productsController.deleteProduct)


module.exports = Route