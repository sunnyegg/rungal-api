// import all the required modules
const express = require('express')
// const app = express()
const Route = express.Router()

// import controller
const categoriesController = require('../controllers/categories')

Route
    .get('/categories', categoriesController.getCategories)
    .post('/categories', categoriesController.addCategory)
    .put('/categories/:id', categoriesController.editCategory)
    .delete('/categories/:id', categoriesController.deleteCategory)


module.exports = Route