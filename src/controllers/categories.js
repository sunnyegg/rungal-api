// import model
const productModel = require('../models/categories')

module.exports = {
    getCategories: (req, res) => {
        productModel.getCategories()
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
    addCategory: (req, res) => {
        const name = req.body
        const data = {
            name,
            date_added: new Date(),
            date_updated: new Date()
        }

        productModel.addCategory(data)
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
    editCategory: (req, res) => {
        const id = req.params
        const name = req.body
        const data = {
            name,
            date_updated: new Date()
        }
        const dataID = id

        productModel.editCategory(data, dataID)
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
    deleteCategory: (req, res) => {
        const id = req.params
        const dataID = id

        productModel.deleteCategory(dataID)
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