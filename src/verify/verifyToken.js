const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const { resNotify } = require("../handleNotify/resNotify")
dotenv.config()

const createJWT = (user_id) => {
    let token = null
    try {
        token = jwt.sign({ user_id: user_id }, "Ngandeptrai", { expiresIn: "2h", })
    } catch (error) {
        console.log(error)
    }
    return token
}

const verifyJWT = (token) => {
    let data = null
    try {
        const decoded = jwt.verify(token, "Ngandeptrai")
        data = decoded
        return data
    } catch (error) {
        console.log(error)
    }
    return data
}

const checkToken = (req, res) => {
    const token = req.cookies.access_token
    if (!token)
        res.status(200).json({
            status: "error",
            message: "You need login"
        })
    return token
}

const verifyUser = (req, res, next) => {
    const token = checkToken(req, res)
    const id_req = parseInt(req.params.id)
    let { user_id } = verifyJWT(token)
    if (id_req !== user_id)
        res.status(200).json({
            ...resNotify("error", "Ban khong co quyen")
        })
    else {
        next()
    }
}

module.exports = {
    createJWT,
    verifyUser
}