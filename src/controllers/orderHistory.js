// import model
const orderModel = require("../models/orderHistory");

module.exports = {
  getProducts: (req, res) => {
    orderModel
      .getProducts()
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!"
        });
      });
  },
  insertProducts: (req, res) => {
    const { name, price, quantity } = req.body;
    let invoice = Math.floor(Math.random() * 10000);
    const data = { name, price, quantity, invoice };

    orderModel
      .insertProducts(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Insert data successfully!",
          result: data
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to insert data!"
        });
      });
  },
  getDailyIncome: (req, res) => {
    orderModel
      .getDailyIncome()
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!"
        });
      });
  },
  getWeeklyIncome: (req, res) => {
    orderModel
      .getWeeklyIncome()
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!"
        });
      });
  },
  getMonthlyIncome: (req, res) => {
    orderModel
      .getMonthlyIncome()
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!"
        });
      });
  },
  getYearlyIncome: (req, res) => {
    orderModel
      .getYearlyIncome()
      .then(result => {
        res.json({
          status: 200,
          message: "Get data successfully!",
          data: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: 500,
          message: "Failed to get data!"
        });
      });
  }
};
