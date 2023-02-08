const Pool = require("../config/connectSQL")
const bcrypt = require("bcrypt")
const { createJWT } = require("../verify/verifyToken")

const createUser = async (req, res) => {
    const { user_name, user_email, user_password, user_country, user_avatar } = req.body
    const user_isAdmin = false
    try {
        if (!user_name || !user_email || !user_password || !user_country)
            res.status(200).json({
                status: "warning",
                message: "Lack of information"
            })
        const [user] = await Pool.execute("SELECT * FROM tbl_users WHERE user_email = ?", [user_email])
        if (user[0])
            res.status(200).json({
                status: "warning",
                message: "Email already exists"
            })
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(user_password, salt)
        await Pool.execute("INSERT INTO `tbl_users`(`user_name`, `user_email`, `user_password`, `user_avatar`, `user_country`, `user_isAdmin`) VALUES (?,?,?,?,?,?)",
            [user_name, user_email, hashed, user_avatar, user_country, user_isAdmin])
        res.status(200).json({
            status: "success",
            message: "Success"
        })
    } catch (error) {
        console.log(error)
    }
}
const loginUser = async (req, res) => {
    const { user_email, user_password } = req.body
    try {
        if (!user_email || !user_password)
            res.status(200).json({
                status: "warning",
                message: "Lack of information"
            })
        const [user] = await Pool.execute("SELECT * FROM tbl_users WHERE user_email=?", [user_email])
        if (user[0]) {
            const rehashed = await bcrypt.compare(user_password, user[0].user_password)
            if (rehashed) {
                const token = createJWT(user[0].user_id)
                const { user_password, ...other } = user[0]
                res
                    .cookie("access_token", token, { secure: false, httpOnly: true })
                    .status(200).json({
                        status: "success",
                        message: "Login success",
                        data: { ...other }
                    })
            }
            else
                res.status(200).json({
                    status: "warning",
                    message: "Email does not exist or password is wrong pw"
                })
        }
        else
            res.status(200).json({
                status: "warning",
                message: "Email does not exist or password is wrong em"
            })
    } catch (error) {
        console.log(error)
    }
}
const logoutUser = (req, res) => {

}
module.exports = {
    createUser,
    loginUser,
    logoutUser
}