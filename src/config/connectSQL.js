const mysql = require("mysql2/promise")

const Pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "blogger_food"
})

module.exports = Pool