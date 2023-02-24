const db = require("../models")

const getAll = async (req, res) => {
    const category = await db.tbl_category.findAll({ attributes: [['id', 'category_id'], 'category_name'] })
    res.status(200).json({
        data: category
    })
}

module.exports = { getAll }