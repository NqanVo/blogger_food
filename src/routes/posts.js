const express = require("express")
const PostsControllers = require("../controllers/post")
const { verifyUser } = require("../verify/verifyToken")
const { midlewareUpdateImagePost, midlewareUploadImagePost } = require("../midleware/midlewareUploadImage")
const route = express.Router()

route.get("/", PostsControllers.getPosts)
route.get("/:id", PostsControllers.getPost)
route.post("/create-post/:id", verifyUser, midlewareUploadImagePost, PostsControllers.createPost)
route.put("/update-post/:id/:post_id", verifyUser, midlewareUpdateImagePost, PostsControllers.updatePost)
route.delete("/delete-post/:id/:post_id", verifyUser, PostsControllers.deletePost)

module.exports = route