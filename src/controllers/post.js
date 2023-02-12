// const Pool = require("../config/connectSQL")
const db = require("../models")

const createPost = async (req, res) => {
    // const data = await db.tbl_user.findOne({ where: { user_name: "ngan" } })
    const [user, created] = await db.tbl_user.findOrCreate(
        {
            where: { user_email: "ngan2@gmail.com" },
            defaults: {
                user_name: "ngan2",
                user_email: "ngan2@gmail.com",
                user_password: "123456",
                user_avatar: "ngan2.png",
                user_country: "vietnam"
            }
        })
    console.log("Check user>>>>>>>>>>>>>>" + JSON.stringify(user))
    console.log("Check create>>>>>>>>>>>>>>" + created)
    // res.status(200).json({
    //     data: data
    // })
}
module.exports = {
    createPost
}