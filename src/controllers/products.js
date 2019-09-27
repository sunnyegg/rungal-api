// import model
const productModel = require('../models/products')

module.exports = {
  getProducts: (req, res) => {
    const search = req.query.name
    const searchParam = (!req.query.name) ? '%%' : `%${search}%`

    const sort = req.query.sort
    let sortParam

    switch (sort) {
      case 'name':
        sortParam = 'name'
        break
      case 'category':
        sortParam = 'category'
        break
      case 'date_added':
        sortParam = 'date_added'
        break
      default:
        sortParam = 'id'
    }

    // const lim = req.query.limit
    // const limit = lim || "0,20"
    const page = parseInt(req.query.page, 10) || 1
    const off = ((page - 1) * 5)
    const lim = (!req.query.page) ? 20 : 5

    const limit = { a: searchParam, b: sortParam, c: off, d: lim }

    productModel.getProducts(limit)
      .then(result => {
        res.json({
          status: 200,
          message: 'Get data successfully!',
          sort: sortParam,
          search: searchParam.replace(/%/g, ''),
          data: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          status: 500,
          message: 'Failed to get data!',
          err
        })
      })
  },

  addProduct: (req, res) => {
    const image = uploadImage(req, res)
    const { name, description, category, price } = req.body
    const data = {
      name,
      description,
      image: image.name,
      category,
      price,
      date_added: new Date(),
      date_updated: new Date()
    }

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
    const quantity = qty

    const date_updated = new Date()

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
          message: 'Failed to add quantity!',
          error: err
        })
      })
  },

  reduceQuantityProduct: (req, res) => {
    const id = req.params
    const qty = req.body.quantity
    const date_updated = new Date()

    productModel.reduceQuantityProduct(qty, id)
      .then(result => {
        res.json({
          status: 200,
          message: 'Quantity reduced successfully!',
          qty,
          date_updated
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: 'Failed to reduce quantity!',
          error: err
        })
      })
  },

  editProduct: (req, res) => {
    const image = uploadImage(req, res)
    const id = req.params
    const { name, description, category, price } = req.body
    const data = {
      name,
      description,
      image: image.name,
      category,
      price,
      date_updated: new Date()
    }

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
  }
}

const uploadImage = (req, res) => {
  try {
    if (!req.files) {
      return {
        status: false,
        message: 'No file uploaded.'
      }
    } else {
      const allowedExt = ['jpg', 'png']
      const path = require('path')

      const image = req.files.image
      const imageName = Date.now() + '-' + image.name

      const type = path.extname(imageName).substr(1).toLowerCase()

      if (allowedExt.indexOf(type) === -1) {
        return res.send('Please upload image file! (jpg/png only').status(400)
      }

      image.mv('./src/assets/img/' + imageName)

      const result = {
        status: true,
        message: 'File uploaded!',
        name: imageName
      }
      return result
    }
  } catch (err) {
    res.status(500).json({
      status: 500
    })
  }
}
