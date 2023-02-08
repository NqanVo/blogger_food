const express = require("express")

const route = express.Router()

route.get("/test", (req, res) => {
    return res.send("hello")
})

module.exports = route