const express = require('express')
const bodyparser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const expressFileUpload = require("express-fileupload")
const connection = require("./src/config/connectSQL")
const routeUsers = require("./src/routes/users")
const routePosts = require("./src/routes/posts")
const routeAuth = require("./src/routes/auth")
const routeCategory = require("./src/routes/category")
const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(expressFileUpload({
    createParentPath: true
}))
app.use(express.static('./src/uploads/'))
app.use("/api/users", routeUsers)
app.use("/api/posts", routePosts)
app.use("/api/auth", routeAuth)
app.use("/api/category", routeCategory)

//404 api
app.use((req, res) => {
    res.send("dont have api")
})


app.listen(7070, () => {
    connection
    console.log("Connected to port 7070")
    // console.log("Connected to db")
})