const db = require("../models")
const bcrypt = require("bcrypt")

const { resNotify } = require("../handleNotify/resNotify")

const getAuthor = async (req, res) => {
    try {
        const user_id = req.params.id
        const user = await db.tbl_user.findByPk(user_id)
        const { user_password, updatedAt, ...other } = user.dataValues
        res.status(200).json({
            data: { ...other }
        })
    } catch (error) {
        res.status(200).json({
            ...resNotify("error", error)
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { user_name, user_country } = req.body
        const user_id = req.params.id
        const newUpdatedAt = new Date()
        await db.tbl_user.update({
            user_name: user_name,
            user_country: user_country,
            updatedAt: newUpdatedAt
        }, {
            where: {
                id: user_id
            }
        })
        const user = await db.tbl_user.findByPk(user_id)
        const { user_password, updatedAt, ...other } = user.dataValues
        res.status(200).json({
            ...resNotify("success", "Update success"),
            data: { ...other }
        })
    } catch (error) {
        res.status(200).json({
            ...resNotify("error", error)
        })
    }
}

const updatePassword = async (req, res) => {
    try {
        const { user_password, user_password_old } = req.body
        const user_id = req.params.id
        const user = await db.tbl_user.findByPk(user_id)
        const rehash = await bcrypt.compare(user_password_old, user.user_password)
        if (!rehash)
            res.status(200).json({
                ...resNotify("error", "Mat khau cu khong dung")
            })
        else {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user_password, salt)
            const newUpdatedAt = new Date()
            await db.tbl_user.update({ user_password: hash, updatedAt: newUpdatedAt }, { where: { id: user_id } })
            res.status(200).json({
                ...resNotify("success", "Cap nhat mat khau thanh cong")
            })
        }
    } catch (error) {
        res.status(200).json({
            ...resNotify("error", error)
        })
    }
}

module.exports = {
    getAuthor,
    updateUser,
    updatePassword
}