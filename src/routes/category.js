const express = require("express")
const route = express.Router()
const CategoryControllers = require("../controllers/category")

route.get("/", CategoryControllers.getAll)

module.exports = route