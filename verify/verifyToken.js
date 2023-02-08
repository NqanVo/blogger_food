import cookieParser from "cookie-parser"

const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

export const createJWT = (user_id) => {
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
    const token = req.cookie.access_token
    if (!token)
        res.status(200).json({
            status: "error",
            message: "You need login"
        })
    return token
}

export const verifyUser = (req, res, next) => {
    const token = checkToken(req, res)
    let decoded = verifyJWT(token)

}