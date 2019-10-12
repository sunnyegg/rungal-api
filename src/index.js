// import all the required modules
const express = require("express");
const Route = express.Router();

// defines all routes
const products = require("./routes/products");
const categories = require("./routes/categories");
const login = require("./routes/users");
const history = require("./routes/orderHistory");

Route.use("/api/v1", products)
  .use("/api/v1", categories)
  .use("/api/v1", login)
  .use("/api/v1", history);

module.exports = Route;
