const express = require("express")
const UserControllers = require("../controllers/user")
const { midlewareUploadImage } = require("../midleware/midlewareUploadImage")
const { verifyUser } = require("../verify/verifyToken")
const route = express.Router()

route.get("/author/:id", UserControllers.getAuthor)
route.get("/author", UserControllers.getAllAuthor)
route.put("/update/:id", verifyUser, UserControllers.updateUser)
route.put("/update-password/:id", verifyUser, UserControllers.updatePassword)
route.put("/update-avatar/:id", verifyUser, midlewareUploadImage, UserControllers.updateAvatar)
route.delete("/delete/:id", verifyUser, UserControllers.deleteUser)

module.exports = route