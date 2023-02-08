const express = require("express")
const route = express.Router()
const AuthControllers = require("../controllers/auth")

route.post("/register", AuthControllers.createUser)
route.post("/login", AuthControllers.loginUser)
route.post("/logout", AuthControllers.logoutUser)

module.exports = route