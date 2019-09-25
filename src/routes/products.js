// import all the required modules
const express = require('express')
const Route = express.Router()

// import controller
const productsController = require('../controllers/products')

Route
    .get('/products', productsController.getProducts)
    .get('/products/:id', productsController.getProductbyID)
    .get('/sort/products', productsController.sortProduct)
    .get('/search/', productsController.searchProductbyName)
    .post('/products', productsController.addProduct)
    .patch('/products/order/:id', productsController.addQuantityProduct)
    .patch('/products/remove/:id', productsController.removeQuantityProduct)
    .put('/products/:id', productsController.editProduct)
    .delete('/products/:id', productsController.deleteProduct)


module.exports = Route