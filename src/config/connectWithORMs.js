const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('blogger_food2', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})
const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test()
module.exports = {
    sequelize
}