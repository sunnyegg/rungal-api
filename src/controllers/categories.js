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

    productModel.addCategory(name)
      .then(result => {
        res.json({
          status: 200,
          message: 'Data added successfully!',
          name
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

    productModel.editCategory(name, id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Data edited successfully!',
          name
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

    productModel.deleteCategory(id)
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
