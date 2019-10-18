// import model
const productModel = require("../models/products");

module.exports = {
  getProducts: async (req, res) => {
    const search = req.query.search;
    const searchParam = !req.query.search ? "%%" : `%${search}%`;

    const sort = req.query.sort;
    let sortParam;

    switch (sort) {
      case "name":
        sortParam = "name";
        break;
      case "category":
        sortParam = "category";
        break;
      case "date_added":
        sortParam = "date_added";
        break;
      default:
        sortParam = "id";
    }

    // const lim = req.query.limit
    // const limit = lim || "0,20"
    const page = parseInt(req.query.page, 10) || 1;
    const off = (page - 1) * 9;
    const lim = req.query.page ? 9 : 20;
    const ord = req.query.order || "desc";

    const limit = { a: searchParam, b: sortParam, c: off, d: lim, e: ord };

    const countData = await productModel.countData();
    productModel
      .getProducts(limit)
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          sort: sortParam,
          search: searchParam.replace(/%/g, ""),
          total_data: countData[0].count,
          total_page: Math.ceil(parseInt(countData[0].count, 10) / lim),
          order: ord,
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!",
          err
        });
      });
  },

  getProductsbyID: (req, res) => {
    const id = req.params.id;

    productModel
      .getProductsbyID(id)
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch();
  },

  addProduct: (req, res) => {
    const image = uploadImage(req, res);
    const { name, description, category, price, quantity } = req.body;
    const data = {
      name,
      description,
      image: image.name,
      category,
      price,
      quantity,
      date_added: new Date(),
      date_updated: new Date()
    };

    productModel
      .addProduct(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Data added successfully!",
          data
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to add data!"
        });
      });
  },

  addQuantityProduct: (req, res) => {
    const id = req.params;
    const qty = req.body.quantity;
    const quantity = qty;

    productModel
      .addQuantityProduct(quantity, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Quantity added successfully!",
          quantity,
          date_updated: new Date()
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: "Failed to add quantity!",
          error: err
        });
      });
  },

  reduceQuantityProduct: (req, res) => {
    const id = req.params;
    const qty = req.body.quantity;

    productModel
      .reduceQuantityProduct(qty, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Quantity reduced successfully!",
          qty,
          date_updated: new Date()
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          message: "Failed to reduce quantity!",
          error: "Quantity too much! Result cannot go below 0!"
        });
      });
  },

  editProduct: (req, res) => {
    const image = uploadImage(req, res);
    const id = req.params;
    const { name, description, category, price } = req.body;
    const data = {
      name,
      description,
      image: image.name,
      category,
      price,
      date_updated: new Date()
    };

    productModel
      .editProduct(data, id)
      .then(result => {
        res.json({
          status: 200,
          message: "Data edited successfully!",
          data
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to edit data!"
        });
      });
  },

  deleteProduct: (req, res) => {
    const id = req.params;

    productModel
      .deleteProduct(id)
      .then(result => {
        res.json({
          status: 200,
          message: "Data deleted successfully!"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to delete data!"
        });
      });
  }
};

const uploadImage = (req, res) => {
  try {
    if (!req.files) {
      return {
        status: false,
        message: "No file uploaded."
      };
    } else {
      const allowedExt = ["jpg", "png", "jpeg"];
      const path = require("path");

      const image = req.files.image;
      const imageName = "rungal-img" + "-" + Date.now() + image.name;

      const type = path
        .extname(imageName)
        .substr(1)
        .toLowerCase();

      if (allowedExt.indexOf(type) === -1) {
        return res.send("Please upload image file! (jpg/png only").status(400);
      }

      image.mv("./src/assets/img/" + imageName);

      const result = {
        status: true,
        message: "File uploaded!",
        name: imageName
      };
      return result;
    }
  } catch (err) {
    res.status(500).json({
      status: 500
    });
  }
};
