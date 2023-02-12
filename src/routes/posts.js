const express = require("express")
const PostsControllers = require("../controllers/post")
const route = express.Router()

route.get("/", PostsControllers.createPost)

module.exports = route