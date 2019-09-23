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
    editProduct: (req, res) => {
        const { id } = req.params
        const { name, description, image, category, price } = req.body
        const date_updated = require('moment')().format('YYYY-MM-DD')
        const data = { name, description, image, category, price, date_updated }
        const dataID = id

        productModel.editProduct(data, dataID)
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
        const dataID = id

        productModel.deleteProduct(dataID)
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
    }
}