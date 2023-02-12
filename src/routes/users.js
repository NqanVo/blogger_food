const express = require("express")
const UserControllers = require("../controllers/user")
const route = express.Router()

route.get("/author/:id", UserControllers.getAuthor)
route.put("/update/:id", UserControllers.updateUser)
route.put("/update-password/:id", UserControllers.updatePassword)

module.exports = route