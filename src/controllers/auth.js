const bcrypt = require("bcrypt")
const { createJWT } = require("../verify/verifyToken")
const db = require("../models")
const { resNotify } = require("../handleNotify/resNotify")
const { Op } = require("sequelize")

const createUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password, user_country } = req.body
        const { user_avatar } = req.files
        if (!user_name || !user_email || !user_password || !user_avatar || !user_country)
            return res.status(200).json({ ...resNotify("warning", "Lack of information") })
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(user_password, salt)
        const rename_avatar = await user_avatar.name.split(".")[0] + "_" + Date.now() + "." + user_avatar.mimetype.split("/")[1]
        const [user, create] = await db.tbl_user.findOrCreate({
            where: { user_email: user_email },
            defaults: {
                user_name: user_name,
                user_email: user_email,
                user_password: hashed,
                user_avatar: rename_avatar,
                user_country: user_country
            }
        })
        if (create) {
            user_avatar.mv('./src/uploads/' + rename_avatar)
            res.status(200).json({ ...resNotify("success", "Success") })
        }
        else
            res.status(200).json({ ...resNotify("error", "Email already exists") })
    } catch (error) {
        res.json({ ...resNotify("error", error) })
    }
}

const loginUser = async (req, res) => {
    const { user_email, user_password } = req.body
    const user = await db.tbl_user.findOne({
        where: {
            user_email: user_email
        }
    })
    if (!user)
        return res.status(200).json({
            ...resNotify("error", "Error em")
        })
    const rehashPassword = await bcrypt.compare(user_password, user.user_password)
    if (!rehashPassword)
        return res.status(200).json({
            ...resNotify("error", "Error ps")
        })
    else {
        const { id, user_password, updatedAt, ...other } = user.dataValues
        const token = createJWT(id)
        return res
            .cookie("access_token", token, { secure: false, httpOnly: true })
            .status(200).json({
                ...resNotify("success", "Login success"),
                data: { id, ...other }
            })
    }
}
const logoutUser = async (req, res) => {
    res.clearCookie("access_token").status(200).json({
        ...resNotify("success", "Logout success")
    })
}

module.exports = {
    createUser,
    loginUser,
    logoutUser
}