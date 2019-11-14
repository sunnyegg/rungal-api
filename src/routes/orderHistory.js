// import all the required modules
const express = require("express");
const Route = express.Router();
const methods = require("../methods");

// import controller
const historyController = require("../controllers/orderHistory");

Route.get("/history", methods.ensureToken, historyController.getProducts);
Route.get(
  "/history/daily",
  methods.ensureToken,
  historyController.getDailyIncome
);
Route.get(
  "/history/weekly",
  methods.ensureToken,
  historyController.getWeeklyIncome
);
Route.get(
  "/history/monthly",
  methods.ensureToken,
  historyController.getMonthlyIncome
);
Route.get(
  "/history/yearly",
  methods.ensureToken,
  historyController.getYearlyIncome
);
Route.post("/history", methods.ensureToken, historyController.insertProducts);

module.exports = Route;
