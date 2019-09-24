// import model
const productModel = require('../models/products')

module.exports = {
    getProducts: (req, res) => {
        productModel.getProducts()
        .then(result => {
            res.json({
                status: 200,
                message: 'Get data successfully!',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Failed to get data!'
            })
        })
    },

    getProductbyID: (req, res) =>{
        const id = req.params

        productModel.getProductbyID(id)
        .then(result => {
            res.json({
                status: 200,
                message: 'Get data successfully!',
                id: result
            })
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Failed to get data!'
            })
        })
    },

    addProduct: (req, res) => {
        const { name, description, image, category, price } = req.body
        const date_added = require('moment')().format('YYYY-MM-DD')
        const date_updated = require('moment')().format('YYYY-MM-DD')
        const data = { name, description, image, category, price, date_added, date_updated }

        productModel.addProduct(data)
        .then(result => {
            res.json({
                status: 200,
                message: 'Data added successfully!',
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Failed to add data!'
            })
        })
    },

    addQuantityProduct: (req, res) => {
        const id = req.params
        const qty = req.body.quantity
        const date_updated = require('moment')().format('YYYY-MM-DD')
        const quantity = qty

        productModel.addQuantityProduct(quantity, id)
        .then(result => {
            res.json({
                status: 200,
                message: 'Quantity added successfully!',
                quantity,
                date_updated
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: 'Failed to add quantity!'
            })
        })
    },

    removeQuantityProduct: (req, res) => {
        const id = req.params
        const qty = req.body.quantity
        const date_updated = require('moment')().format('YYYY-MM-DD')
        const quantity = qty

        productModel.removeQuantityProduct(quantity, id)
        .then(result => {
            res.json({
                status: 200,
                message: 'Quantity removed successfully!',
                quantity,
                date_updated
            })
        })
        .catch(err =>{
            res.status(500).json({
                status: 500,
                message: 'Failed to remove quantity!'
            })
        })
    },

    editProduct: (req, res) => {
        const id = req.params
        const { name, description, image, category, price } = req.body
        const date_updated = require('moment')().format('YYYY-MM-DD')
        const data = { name, description, image, category, price, date_updated }

        productModel.editProduct(data, id)
        .then(result => {
            res.json({
                status: 200,
                message: 'Data edited successfully!',
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Failed to edit data!'
            })
        })
    },

    deleteProduct: (req, res) => {
        const id = req.params

        productModel.deleteProduct(id)
        .then(result => {
            res.json({
                status: 200,
                message: 'Data deleted successfully!'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Failed to delete data!'
            })
        })
    },
    
    searchProductbyName: (req, res) => {
        const search = req.query.name

        productModel.searchProductbyName(search)
        .then(result => {
            res.json({
                status: 200,
                message: 'Searched successfully!',
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: 200,
                message: 'Failed to search!'
            })
        })
    }
}